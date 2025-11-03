### Roster Details<br />
Team Name: Metizport<br />
Roster: isak, Jackinho, L00m1, MaiL09, Plopski<br />
Global Rank: [121](../../standings_global_2025_11_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_11_03.md)<br />
Regional Rank: [83]( ../../standings_europe_2025_11_03.md)<br />
<br />
Final Rank Value:  771.3<br />
<br />
Final Rank Value (771.3) = Starting Rank Value (746.6) + Head To Head Adjustments (24.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.272[<sup>1</sup>](#table2)
- Bounty Collected: 0.292[<sup>2</sup>](#table1)
- Opponent Network: 0.150[<sup>2</sup>](#table1)
- LAN Wins: 0.025[<sup>2</sup>](#table1)

The average of these factors is 0.185<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 746.6
- 400 + ( ( 0.185 - 0.000 ) / ( 0.853 - 0.000 ) ) * 1600 = 746.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           33 |      775 | 2025-10-04 | fnatic            | L   | 0.999      | -            | -                | -                | -         |    -0.97 | isak, Jackinho, L00m1, MaiL09, Plopski |
|           32 |     1144 | 2025-09-25 | FlyQuest          | L   | 0.940      | -            | -                | -                | -         |    -1.39 | isak, Jackinho, L00m1, MaiL09, Plopski |
|           31 |     1163 | 2025-09-25 | Nexus             | L   | 0.938      | -            | -                | -                | -         |    -8.24 | isak, Jackinho, L00m1, MaiL09, Plopski |
|           30 |     1350 | 2025-09-18 | Sashi             | L   | 0.892      | -            | -                | -                | -         |    -6.10 | isak, Jackinho, L00m1, MaiL09, Plopski |
|           29 |     1437 | 2025-09-15 | CPH Wolves        | W   | 0.872      | 0.371        | 0.009 (0.003)    | 0.756 (0.244)    | 0 (0.000) |    17.25 | isak, Jackinho, L00m1, MaiL09, Plopski |
|           28 |     1617 | 2025-09-11 | AMKAL             | L   | 0.847      | -            | -                | -                | -         |   -14.48 | isak, Jackinho, L00m1, MaiL09, Plopski |
|           27 |     1657 | 2025-09-10 | Betclic           | L   | 0.841      | -            | -                | -                | -         |   -17.37 | isak, Jackinho, L00m1, MaiL09, Plopski |
|           26 |     1706 | 2025-09-09 | Venom             | L   | 0.834      | -            | -                | -                | -         |    -3.39 | isak, Jackinho, L00m1, MaiL09, Plopski |
|           25 |     1800 | 2025-09-07 | Washington        | W   | 0.819      | 0.371        | 0.002 (0.001)    | 0.185 (0.056)    | 0 (0.000) |    11.37 | isak, Jackinho, L00m1, MaiL09, Plopski |
|           24 |     1974 | 2025-08-29 | OG                | L   | 0.759      | -            | -                | -                | -         |    -0.78 | isak, Jackinho, L00m1, MaiL09, Plopski |
|           23 |     2059 | 2025-08-26 | SPARTA            | W   | 0.740      | 0.435        | 0.002 (0.001)    | 0.736 (0.237)    | 0 (0.000) |    14.19 | isak, Jackinho, L00m1, MaiL09, Plopski |
|           22 |     2086 | 2025-08-24 | Zero Tenacity     | L   | 0.727      | -            | -                | -                | -         |    -3.16 | isak, Jackinho, L00m1, MaiL09, Plopski |
|           21 |     2122 | 2025-08-22 | CYBERSHOKE        | W   | 0.712      | 0.435        | 0.043 (0.013)    | 0.839 (0.260)    | 0 (0.000) |    17.49 | isak, Jackinho, L00m1, MaiL09, Plopski |
|           20 |     2175 | 2025-08-20 | 500               | W   | 0.699      | 0.435        | 0.003 (0.001)    | 0.735 (0.223)    | 0 (0.000) |    17.50 | isak, Jackinho, L00m1, MaiL09, Plopski |
|           19 |     2227 | 2025-08-17 | JiJieHao          | L   | 0.681      | -            | -                | -                | -         |    -6.99 | isak, Jackinho, L00m1, MaiL09, Plopski |
|           18 |     2365 | 2025-08-14 | ECLOT             | W   | 0.660      | 0.486        | 0.048 (0.016)    | 0.537 (0.172)    | 0 (0.000) |    16.57 | isak, Jackinho, L00m1, MaiL09, Plopski |
|           17 |     2423 | 2025-08-13 | Sangal            | L   | 0.653      | -            | -                | -                | -         |    -5.84 | isak, Jackinho, L00m1, MaiL09, Plopski |
|           16 |     2513 | 2025-08-11 | HOTU              | L   | 0.640      | -            | -                | -                | -         |    -9.22 | isak, Jackinho, L00m1, MaiL09, Plopski |
|           15 |     2544 | 2025-08-10 | SPARTA            | L   | 0.635      | -            | -                | -                | -         |    -7.60 | isak, Jackinho, L00m1, MaiL09, Plopski |
|           14 |     2580 | 2025-08-09 | SINNERS           | L   | 0.626      | -            | -                | -                | -         |    -1.74 | isak, Jackinho, L00m1, MaiL09, Plopski |
|           13 |     2589 | 2025-08-09 | SPARTA            | W   | 0.624      | 0.384        | 0.002 (0.000)    | 0.736 (0.177)    | 0 (0.000) |    12.11 | isak, Jackinho, L00m1, MaiL09, Plopski |
|           12 |     2956 | 2025-07-18 | Partizan          | L   | 0.480      | -            | -                | -                | -         |    -1.67 | isak, Jackinho, L00m1, MaiL09, Plopski |
|           11 |     2974 | 2025-07-17 | RUBY              | L   | 0.473      | -            | -                | -                | -         |    -3.53 | isak, Jackinho, L00m1, MaiL09, Plopski |
|           10 |     3002 | 2025-07-16 | NIP Impact        | W   | 0.466      | 0.371        | 0.005 (0.001)    | 0.233 (0.040)    | 0 (0.000) |     5.84 | isak, Jackinho, L00m1, MaiL09, Plopski |
|            9 |     3083 | 2025-07-12 | Passion UA        | L   | 0.440      | -            | -                | -                | -         |    -3.59 | isak, Jackinho, L00m1, MaiL09, Plopski |
|            8 |     3116 | 2025-07-11 | NOVAQ             | W   | 0.434      | 0.486        | 0.014 (0.003)    | 0.409 (0.086)    | 0 (0.000) |     8.96 | isak, Jackinho, L00m1, MaiL09, Plopski |
|            7 |     3449 | 2025-06-14 | Sashi             | L   | 0.253      | -            | -                | -                | -         |    -1.87 | hampus, isak, L00m1, Lekr0, Plopski    |
|            6 |     3459 | 2025-06-14 | Ninjas in Pyjamas | L   | 0.253      | -            | -                | -                | -         |    -0.23 | hampus, isak, L00m1, Lekr0, Plopski    |
|            5 |     3478 | 2025-06-13 | Johnny Speeds     | W   | 0.248      | 0.360        | 0.003 (0.000)    | 0.023 (0.002)    | 1 (0.248) |     2.92 | hampus, isak, L00m1, Lekr0, Plopski    |
|            4 |     3638 | 2025-06-04 | Imperial          | L   | 0.188      | -            | -                | -                | -         |    -0.14 | adamb, hampus, isak, L00m1, Plopski    |
|            3 |     3651 | 2025-06-03 | TYLOO             | L   | 0.182      | -            | -                | -                | -         |    -0.14 | adamb, hampus, isak, L00m1, Plopski    |
|            2 |     3661 | 2025-06-03 | Wildcard          | L   | 0.180      | -            | -                | -                | -         |    -0.88 | adamb, hampus, isak, L00m1, Plopski    |
|            1 |     4092 | 2025-05-10 | Alliance          | L   | 0.019      | -            | -                | -                | -         |    -0.08 | adamb, hampus, isak, L00m1, Plopski    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,311.58)
- Divide that value by the 5th highest value among all rosters ($619,318.60)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-07-13 |      0.448 | $2,930.00      | $1,311.58       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
