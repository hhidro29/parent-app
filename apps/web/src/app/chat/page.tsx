"use client";

export default function ChatPage() {
    const conversations = [
        { id: 1, name: "Champions Wonderlab", message: "Jadwal kelas telah diupdate", time: "2 jam lalu", unread: 2 },
        { id: 2, name: "English Academy", message: "Reminder: Parent meeting besok", time: "5 jam lalu", unread: 0 },
        { id: 3, name: "Admin Support", message: "Pembayaran Anda telah dikonfirmasi", time: "1 hari lalu", unread: 0 },
    ];

    return (
        <div className="flex flex-col min-h-full w-full bg-[#f7f9fd]">
            {/* Header */}
            <div className="bg-[#1fb0c3] h-[24px] w-full" />
            <div
                className="relative overflow-hidden rounded-bl-[28px] w-full"
                style={{
                    backgroundImage: "linear-gradient(90deg, rgba(4, 35, 81, 0.14) 0%, rgba(4, 35, 81, 0.14) 100%), linear-gradient(161.996deg, rgb(123, 215, 251) 0%, rgb(52, 206, 158) 100%)",
                }}
            >
                <div className="flex items-center justify-between p-[12px]">
                    <p className="font-['Inter'] font-bold leading-[24px] text-[16px] text-white">Messages</p>
                    <div className="relative shrink-0 size-[24px] bg-white rounded-full flex items-center justify-center">
                        <span className="text-[12px]">✏️</span>
                    </div>
                </div>
            </div>

            {/* Chat List */}
            <div className="flex flex-col gap-[1px] bg-[#e5e5e5] mt-[12px]">
                {conversations.map((chat) => (
                    <div key={chat.id} className="bg-white p-[12px] flex gap-[12px] items-center">
                        <div className="size-[48px] rounded-full bg-gradient-to-br from-[#7BD7FB] to-[#34CE9E] flex items-center justify-center">
                            <span className="text-white font-bold text-[18px]">{chat.name[0]}</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-center">
                                <p className="font-['Inter'] font-semibold text-[14px] text-[#2c313a]">{chat.name}</p>
                                <p className="font-['Inter'] font-normal text-[11px] text-[#5e677b]">{chat.time}</p>
                            </div>
                            <div className="flex justify-between items-center mt-[4px]">
                                <p className="font-['Inter'] font-normal text-[12px] text-[#5e677b] truncate max-w-[200px]">{chat.message}</p>
                                {chat.unread > 0 && (
                                    <div className="bg-[#f26d0f] rounded-full size-[20px] flex items-center justify-center">
                                        <span className="font-['Inter'] font-bold text-[10px] text-white">{chat.unread}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
