### Roster Details<br />
Team Name: BIG<br />
Roster: JDC, Krimbo, rigoN, syrsoN, tabseN<br />
Global Rank: [18](../../standings_global_2024_12_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_02.md)<br />
Regional Rank: [13]( ../../standings_europe_2024_12_02.md)<br />
<br />
Final Rank Value:  1433.8<br />
<br />
Final Rank Value (1433.8) = Starting Rank Value (1504.0) + Head To Head Adjustments (-70.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.558[<sup>1</sup>](#table2)
- Bounty Collected: 0.462[<sup>2</sup>](#table1)
- Opponent Network: 0.218[<sup>2</sup>](#table1)
- LAN Wins: 0.961[<sup>2</sup>](#table1)

The average of these factors is 0.550<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1504.0
- 400 + ( ( 0.550 - 0.000 ) / ( 0.797 - 0.000 ) ) * 1600 = 1504.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           41 |       11 | 2024-12-01 | FURIA           | L   | 1.000      | -            | -                | -                | -         |   -10.87 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           40 |       30 | 2024-11-30 | Virtus.pro      | W   | 1.000      | -            | -                | -                | 1 (1.000) |    16.19 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           39 |       57 | 2024-11-30 | FlyQuest        | L   | 1.000      | -            | -                | -                | -         |   -14.79 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           38 |       62 | 2024-11-29 | Passion UA      | W   | 1.000      | 0.143        | -                | 1.000 (0.143)    | 1 (1.000) |     6.09 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           37 |      212 | 2024-11-22 | Passion UA      | W   | 1.000      | 0.143        | -                | 1.000 (0.143)    | 1 (1.000) |     5.75 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           36 |      223 | 2024-11-21 | HEROIC          | W   | 1.000      | 0.143        | 0.628 (0.090)    | -                | 1 (1.000) |    24.52 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           35 |      235 | 2024-11-21 | Sashi           | W   | 1.000      | -            | -                | -                | 1 (1.000) |     4.25 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           34 |      489 | 2024-11-11 | GUN5            | L   | 1.000      | -            | -                | -                | -         |   -25.74 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           33 |      646 | 2024-11-02 | ALTERNATE aTTaX | W   | 1.000      | -            | -                | -                | -         |     2.79 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           32 |      802 | 2024-10-26 | OG              | L   | 0.952      | -            | -                | -                | -         |   -26.59 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           31 |      829 | 2024-10-24 | BESTIA          | W   | 0.941      | 0.477        | 0.114 (0.051)    | 0.685 (0.307)    | -         |     6.03 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           30 |      838 | 2024-10-24 | Aurora          | W   | 0.939      | 0.477        | 0.090 (0.040)    | 0.420 (0.188)    | -         |     3.53 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           29 |     1191 | 2024-10-06 | FlyQuest        | L   | 0.822      | -            | -                | -                | -         |   -12.98 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           28 |     1197 | 2024-10-06 | SAW             | W   | 0.821      | 0.500        | 0.287 (0.118)    | 0.657 (0.270)    | 1 (0.821) |    17.57 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           27 |     1262 | 2024-10-04 | M80             | W   | 0.808      | 0.500        | 0.155 (0.063)    | 0.585 (0.236)    | 1 (0.808) |     8.78 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           26 |     1270 | 2024-10-04 | ODDIK           | W   | 0.807      | 0.500        | 0.105 (0.043)    | 0.541 (0.218)    | 1 (0.807) |     2.67 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           25 |     1629 | 2024-09-25 | ECSTATIC        | L   | 0.747      | -            | -                | -                | -         |   -21.48 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           24 |     1684 | 2024-09-24 | Monte           | L   | 0.739      | -            | -                | -                | -         |   -20.34 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           23 |     1893 | 2024-09-17 | The MongolZ     | L   | 0.693      | -            | -                | -                | -         |    -3.10 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           22 |     2001 | 2024-09-13 | Complexity      | W   | 0.667      | 0.889        | 0.120 (0.071)    | 0.376 (0.223)    | 1 (0.667) |    11.59 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           21 |     2031 | 2024-09-12 | fnatic          | W   | 0.661      | 0.889        | 0.215 (0.127)    | 0.447 (0.262)    | 1 (0.661) |     6.31 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           20 |     2071 | 2024-09-11 | Rooster         | W   | 0.653      | -            | -                | -                | -         |     0.34 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           19 |     2097 | 2024-09-10 | Imperial        | L   | 0.647      | -            | -                | -                | -         |   -15.07 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           18 |     2622 | 2024-08-26 | ALTERNATE aTTaX | L   | 0.546      | -            | -                | -                | -         |   -15.02 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           17 |     2675 | 2024-08-24 | Virtus.pro      | L   | 0.535      | -            | -                | -                | -         |    -7.66 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           16 |     2696 | 2024-08-23 | GamerLegion     | W   | 0.528      | 0.535        | 0.126 (0.035)    | 0.660 (0.187)    | -         |     5.22 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           15 |     2708 | 2024-08-23 | Permitta        | W   | 0.526      | -            | -                | -                | -         |     2.80 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           14 |     2748 | 2024-08-22 | Qiang           | W   | 0.519      | -            | -                | -                | -         |     0.24 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           13 |     2774 | 2024-08-21 | Insilio         | W   | 0.514      | -            | -                | -                | -         |     0.61 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           12 |     2828 | 2024-08-21 | Passion UA      | L   | 0.512      | -            | -                | -                | -         |   -12.48 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           11 |     3151 | 2024-08-09 | Falcons         | L   | 0.434      | -            | -                | -                | -         |   -11.65 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|           10 |     3183 | 2024-08-08 | SAW             | L   | 0.426      | -            | -                | -                | -         |    -5.25 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|            9 |     3236 | 2024-08-07 | FlyQuest        | W   | 0.419      | -            | -                | -                | -         |     5.16 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|            8 |     3390 | 2024-08-02 | Natus Vincere   | L   | 0.387      | -            | -                | -                | -         |    -1.39 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|            7 |     3426 | 2024-08-01 | Virtus.pro      | W   | 0.382      | 0.581        | 0.217 (0.048)    | -                | -         |     6.71 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|            6 |     3488 | 2024-07-31 | Natus Vincere   | L   | 0.374      | -            | -                | -                | -         |    -1.25 | JDC, Krimbo, rigoN, syrsoN, tabseN  |
|            5 |     4371 | 2024-06-15 | Permitta        | L   | 0.065      | -            | -                | -                | -         |    -1.44 | JDC, Krimbo, prosus, syrsoN, tabseN |
|            4 |     4397 | 2024-06-14 | SovvyKiNG       | W   | 0.060      | -            | -                | -                | -         |     0.01 | JDC, Krimbo, prosus, syrsoN, tabseN |
|            3 |     4726 | 2024-06-06 | fnatic          | L   | 0.008      | -            | -                | -                | -         |    -0.18 | JDC, Krimbo, prosus, syrsoN, tabseN |
|            2 |     4758 | 2024-06-06 | Eternal Fire    | L   | 0.005      | -            | -                | -                | -         |    -0.06 | JDC, Krimbo, prosus, syrsoN, tabseN |
|            1 |     4789 | 2024-06-05 | BetBoom         | L   | 0.001      | -            | -                | -                | -         |    -0.02 | JDC, Krimbo, prosus, syrsoN, tabseN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($59,822.22)
- Divide that value by the 5th highest value among all rosters ($370,006.61)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-12 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-10-26 |      0.955 | $20,000.00     | $19,104.39      |
| 2024-10-06 |      0.822 | $20,000.00     | $16,445.20      |
| 2024-09-26 |      0.754 | $1,000.00      | $753.85         |
| 2024-09-22 |      0.728 | $17,500.00     | $12,738.47      |
| 2024-08-25 |      0.541 | $7,500.00      | $4,058.32       |
| 2024-08-09 |      0.435 | $4,500.00      | $1,956.24       |
| 2024-08-04 |      0.400 | $8,500.00      | $3,400.63       |
| 2024-06-16 |      0.074 | $2,000.00      | $147.92         |
| 2024-06-09 |      0.027 | $8,000.00      | $217.20         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
