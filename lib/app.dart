import 'package:flutter/material.dart';
import 'widgets/bottom_nav.dart';

class AsmiApp extends StatelessWidget {
  const AsmiApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Asmi',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        useMaterial3: true,
        brightness: Brightness.dark,
        scaffoldBackgroundColor: const Color(0xFF0B1015),
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color(0xFF4ADE80),
          brightness: Brightness.dark,
        ),
      ),
      home: const BottomNavScreen(),
    );
  }
}
