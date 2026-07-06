### Roster Details<br />
Team Name: NOVAQ<br />
Roster: def1zer, ICY, neaLaN, Pump, tasman<br />
Global Rank: [146](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [101]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  851.6<br />
<br />
Final Rank Value (851.6) = Starting Rank Value (838.8) + Head To Head Adjustments (12.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.309[<sup>1</sup>](#table2)
- Bounty Collected: 0.271[<sup>2</sup>](#table1)
- Opponent Network: 0.095[<sup>2</sup>](#table1)
- LAN Wins: 0.256[<sup>2</sup>](#table1)

The average of these factors is 0.233<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 838.8
- 400 + ( ( 0.233 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 838.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           28 |      121 | 2026-06-25 | Rune Eaters      | L   | 1.000      | -            | -                | -                | -         |   -13.38 | AdreN, kAlash, neaLaN, Pump, tasman  |
|           27 |      128 | 2026-06-25 | The Huns         | L   | 1.000      | -            | -                | -                | -         |    -7.34 | AdreN, kAlash, neaLaN, Pump, tasman  |
|           26 |      135 | 2026-06-25 | Rune Eaters      | W   | 1.000      | 0.324        | 0.010 (0.003)    | 0.680 (0.220)    | 1 (1.000) |    17.88 | AdreN, kAlash, neaLaN, Pump, tasman  |
|           25 |     2773 | 2026-04-02 | JUMBO            | L   | 0.565      | -            | -                | -                | -         |   -15.30 | def1zer, ICY, neaLaN, Pump, tasman   |
|           24 |     2866 | 2026-03-31 | K27              | L   | 0.557      | -            | -                | -                | -         |    -1.68 | def1zer, ICY, neaLaN, Pump, tasman   |
|           23 |     3822 | 2026-03-15 | ex-MANA          | L   | 0.448      | -            | -                | -                | -         |    -8.31 | def1zer, ICY, neaLaN, Pump, tasman   |
|           22 |     3844 | 2026-03-15 | Omega            | L   | 0.445      | -            | -                | -                | -         |    -3.91 | def1zer, ICY, neaLaN, Pump, tasman   |
|           21 |     3861 | 2026-03-14 | illwill          | L   | 0.441      | -            | -                | -                | -         |    -4.96 | def1zer, ICY, neaLaN, Pump, tasman   |
|           20 |     3956 | 2026-03-12 | HAVU             | W   | 0.428      | 0.384        | -                | 0.391 (0.064)    | 0 (0.000) |     5.44 | def1zer, ICY, neaLaN, Pump, tasman   |
|           19 |     4027 | 2026-03-11 | aimclub          | W   | 0.419      | 0.384        | 0.001 (0.000)    | -                | 0 (0.000) |     6.70 | def1zer, ICY, neaLaN, Pump, tasman   |
|           18 |     4057 | 2026-03-10 | Hashiras         | W   | 0.414      | 0.384        | 0.001 (0.000)    | 0.502 (0.080)    | 0 (0.000) |     4.21 | def1zer, ICY, neaLaN, Pump, tasman   |
|           17 |     4086 | 2026-03-09 | Metizport        | L   | 0.408      | -            | -                | -                | -         |    -2.81 | def1zer, ICY, neaLaN, Pump, tasman   |
|           16 |     4106 | 2026-03-09 | aimclub          | L   | 0.407      | -            | -                | -                | -         |    -6.30 | def1zer, ICY, neaLaN, Pump, tasman   |
|           15 |     4249 | 2026-03-07 | Lazer Cats       | W   | 0.393      | 0.435        | 0.003 (0.001)    | -                | 0 (0.000) |     4.62 | def1zer, ICY, neaLaN, Pump, tasman   |
|           14 |     4286 | 2026-03-06 | ENCE             | W   | 0.386      | 0.384        | 0.010 (0.001)    | 0.488 (0.072)    | -         |     4.85 | def1zer, ICY, neaLaN, Pump, tasman   |
|           13 |     4313 | 2026-03-05 | ex-Zero Tenacity | W   | 0.382      | 0.384        | 0.002 (0.000)    | 0.879 (0.129)    | -         |     4.89 | def1zer, ICY, neaLaN, Pump, tasman   |
|           12 |     4350 | 2026-03-05 | Oxuji            | W   | 0.379      | 0.435        | 0.006 (0.001)    | 0.770 (0.127)    | -         |     9.97 | def1zer, ICY, neaLaN, Pump, tasman   |
|           11 |     4421 | 2026-03-03 | Omega            | L   | 0.368      | -            | -                | -                | -         |    -2.70 | def1zer, ICY, neaLaN, Pump, tasman   |
|           10 |     4467 | 2026-03-02 | HEROIC Academy   | W   | 0.361      | 0.384        | 0.003 (0.000)    | 0.420 (0.058)    | -         |     5.35 | def1zer, ICY, neaLaN, Pump, tasman   |
|            9 |     4494 | 2026-03-02 | Acend            | L   | 0.359      | -            | -                | -                | -         |    -0.53 | def1zer, ICY, neaLaN, Pump, tasman   |
|            8 |     4613 | 2026-02-27 | Omega            | W   | 0.340      | 0.351        | 0.016 (0.002)    | 0.472 (0.056)    | 1 (0.340) |     8.62 | def1zer, ICY, neaLaN, Pump, tasman   |
|            7 |     4630 | 2026-02-27 | DONSTU           | W   | 0.338      | 0.351        | -                | 0.551 (0.066)    | 1 (0.338) |     3.20 | def1zer, ICY, neaLaN, Pump, tasman   |
|            6 |     4670 | 2026-02-26 | Rune Eaters      | W   | 0.334      | -            | -                | -                | 1 (0.334) |     3.05 | def1zer, ICY, neaLaN, Pump, tasman   |
|            5 |     4863 | 2026-02-22 | Nemiga           | W   | 0.307      | 0.333        | 0.111 (0.011)    | 0.774 (0.079)    | 1 (0.307) |     8.31 | def1zer, ICY, neaLaN, Pump, tasman   |
|            4 |     4894 | 2026-02-22 | Nemesis          | L   | 0.306      | -            | -                | -                | -         |    -1.60 | def1zer, ICY, neaLaN, Pump, tasman   |
|            3 |     5892 | 2026-01-27 | Rune Eaters      | L   | 0.134      | -            | -                | -                | -         |    -3.01 | def1zer, k4zmo, neaLaN, Pump, tasman |
|            2 |     5900 | 2026-01-27 | ALTAY            | W   | 0.133      | -            | -                | -                | 1 (0.133) |     0.57 | def1zer, k4zmo, neaLaN, Pump, tasman |
|            1 |     5910 | 2026-01-27 | Rune Eaters      | L   | 0.132      | -            | -                | -                | -         |    -2.99 | def1zer, k4zmo, neaLaN, Pump, tasman |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,242.63)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-15 |      0.448 | $500.00        | $224.04         |
| 2026-03-15 |      0.446 | $509.00        | $227.03         |
| 2026-02-27 |      0.340 | $7,133.00      | $2,422.90       |
| 2026-02-22 |      0.307 | $1,200.00      | $368.67         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
