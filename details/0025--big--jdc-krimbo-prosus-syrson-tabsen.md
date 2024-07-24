### Roster Details<br />
Team Name: BIG<br />
Roster: JDC, Krimbo, prosus, syrsoN, tabseN<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [25](../standings_global.md)<br />
Regional Rank: [17]( ../standings_europe.md)<br />
Final Rank Value:  1287.8<br />
<br />
Final Rank Value (1287.8) = Starting Rank Value (1299.4) + Head To Head Adjustments (-11.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.567[<sup>1</sup>](#table2)
- Bounty Collected: 0.489[<sup>2</sup>](#table1)
- Opponent Network: 0.189[<sup>2</sup>](#table1)
- LAN Wins: 0.531[<sup>2</sup>](#table1)

The average of these factors is 0.444<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1299.4
- 400 + ( ( 0.444 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1299.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           37 |      655 | 2024-06-15 | Permitta      | L   | 0.937      | -            | -                | -                | -         |   -26.02 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           36 |      681 | 2024-06-14 | Space         | W   | 0.933      | 0.435        | -                | 0.452 (0.183)    | 0 (0.000) |     2.66 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           35 |     1010 | 2024-06-06 | fnatic        | L   | 0.880      | -            | -                | -                | -         |    -8.11 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           34 |     1042 | 2024-06-06 | Eternal Fire  | L   | 0.878      | -            | -                | -                | -         |    -4.39 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           33 |     1073 | 2024-06-05 | BetBoom       | L   | 0.873      | -            | -                | -                | -         |   -10.72 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           32 |     1087 | 2024-06-05 | Complexity    | L   | 0.872      | -            | -                | -                | -         |    -3.15 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           31 |     1097 | 2024-06-05 | FURIA         | W   | 0.871      | 0.715        | 0.355 (0.221)    | 0.563 (0.351)    | 1 (0.871) |    22.82 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           30 |     1279 | 2024-05-29 | HEROIC        | L   | 0.828      | -            | -                | -                | -         |    -4.00 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           29 |     1289 | 2024-05-29 | Virtus.pro    | W   | 0.827      | 0.624        | 0.595 (0.307)    | 0.374 (0.193)    | 1 (0.827) |    23.75 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           28 |     1306 | 2024-05-28 | FlyQuest      | W   | 0.821      | 0.624        | 0.133 (0.068)    | 0.349 (0.179)    | 1 (0.821) |    12.75 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           27 |     1330 | 2024-05-27 | Natus Vincere | L   | 0.814      | -            | -                | -                | -         |    -0.55 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           26 |     1525 | 2024-05-20 | MIBR          | L   | 0.766      | -            | -                | -                | -         |    -6.12 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           25 |     1544 | 2024-05-19 | Astralis      | L   | 0.760      | -            | -                | -                | -         |    -1.71 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           24 |     1920 | 2024-05-07 | G2            | L   | 0.679      | -            | -                | -                | -         |    -0.57 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           23 |     1982 | 2024-05-03 | HEROIC        | W   | 0.654      | 0.889        | 0.272 (0.158)    | 0.404 (0.235)    | 1 (0.654) |    17.85 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           22 |     1991 | 2024-05-03 | PERA          | W   | 0.652      | 0.889        | 0.061 (0.035)    | 0.462 (0.268)    | 1 (0.652) |     2.74 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           21 |     2018 | 2024-05-02 | Natus Vincere | L   | 0.645      | -            | -                | -                | -         |    -0.34 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           20 |     2043 | 2024-05-01 | BOSS          | W   | 0.639      | 0.889        | 0.018 (0.010)    | 0.378 (0.214)    | 1 (0.639) |     1.74 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           19 |     2254 | 2024-04-21 | BLEED         | L   | 0.572      | -            | -                | -                | -         |   -13.72 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           18 |     2280 | 2024-04-20 | GamerLegion   | W   | 0.566      | 0.384        | 0.205 (0.045)    | -                | 0 (0.000) |     5.92 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           17 |     2390 | 2024-04-18 | LEON          | W   | 0.551      | -            | -                | -                | -         |     0.69 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           16 |     2499 | 2024-04-13 | OG            | L   | 0.519      | -            | -                | -                | -         |   -12.34 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           15 |     2508 | 2024-04-12 | FORZE         | W   | 0.513      | 0.684        | 0.078 (0.027)    | 0.233 (0.082)    | -         |     2.47 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           14 |     2579 | 2024-04-10 | Gods Reign    | W   | 0.500      | 0.684        | 0.056 (0.019)    | 0.262 (0.090)    | -         |     1.08 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           13 |     2638 | 2024-04-09 | BetBoom       | L   | 0.493      | -            | -                | -                | -         |    -4.04 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           12 |     2817 | 2024-04-03 | EYEBALLERS    | W   | 0.452      | 0.384        | -                | 0.571 (0.099)    | -         |     1.50 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           11 |     3297 | 2024-03-09 | Spirit        | L   | 0.287      | -            | -                | -                | -         |    -0.26 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           10 |     3326 | 2024-03-08 | GamerLegion   | W   | 0.280      | -            | -                | -                | -         |     0.73 | JDC, Krimbo, prosus, syrsoN, tabseN |
|            9 |     3460 | 2024-03-03 | Young Ninjas  | L   | 0.247      | -            | -                | -                | -         |    -7.37 | JDC, Krimbo, prosus, syrsoN, tabseN |
|            8 |     3518 | 2024-03-01 | AMKAL         | W   | 0.232      | 0.500        | 0.111 (0.013)    | -                | -         |     1.84 | JDC, Krimbo, prosus, syrsoN, tabseN |
|            7 |     3545 | 2024-02-28 | BLEED         | L   | 0.218      | -            | -                | -                | -         |    -5.82 | JDC, Krimbo, prosus, syrsoN, tabseN |
|            6 |     4069 | 2024-02-02 | Apeks         | L   | 0.048      | -            | -                | -                | -         |    -1.31 | Krimbo, mantuu, prosus, s1n, tabseN |
|            5 |     4124 | 2024-01-31 | HEROIC        | L   | 0.034      | -            | -                | -                | -         |    -0.16 | Krimbo, mantuu, prosus, s1n, tabseN |
|            4 |     4131 | 2024-01-31 | ENCE          | W   | 0.033      | -            | -                | -                | 1 (0.033) |     0.67 | Krimbo, mantuu, prosus, s1n, tabseN |
|            3 |     4171 | 2024-01-28 | Astralis      | L   | 0.013      | -            | -                | -                | -         |    -0.03 | Krimbo, mantuu, prosus, s1n, tabseN |
|            2 |     4179 | 2024-01-27 | Virtus.pro    | L   | 0.007      | -            | -                | -                | -         |    -0.01 | Krimbo, mantuu, prosus, s1n, tabseN |
|            1 |     4195 | 2024-01-26 | Cloud9        | W   | 0.001      | -            | -                | -                | 1 (0.001) |     0.01 | Krimbo, mantuu, prosus, s1n, tabseN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($47,683.46)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.17) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.947 | $2,000.00      | $1,893.11       |
| 2024-06-09 |      0.900 | $8,000.00      | $7,197.97       |
| 2024-06-02 |      0.854 | $6,000.00      | $5,125.00       |
| 2024-05-12 |      0.713 | $17,500.00     | $12,477.85      |
| 2024-04-14 |      0.526 | $35,000.00     | $18,427.35      |
| 2024-03-10 |      0.294 | $7,500.00      | $2,206.18       |
| 2024-02-02 |      0.048 | $4,500.00      | $214.44         |
| 2024-01-28 |      0.013 | $10,500.00     | $141.56         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
