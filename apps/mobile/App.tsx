import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
const StyledView = View;
const StyledText = Text;

export default function App() {
    return (
        <StyledView className="flex-1 items-center justify-center bg-blue-500">
            <StyledText className="text-white text-lg font-bold">
                Hello NativeWind! 🚀
            </StyledText>
            <StyledText className="text-white mt-4">
                Edit apps/mobile/App.tsx to see changes.
            </StyledText>
            <StatusBar style="auto" />
        </StyledView>
    );
}
