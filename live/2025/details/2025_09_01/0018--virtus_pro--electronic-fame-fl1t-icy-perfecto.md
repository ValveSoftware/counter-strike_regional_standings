### Roster Details<br />
Team Name: Virtus.pro<br />
Roster: electroNic, fame, FL1T, ICY, Perfecto<br />
Global Rank: [18](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_09_01.md)<br />
Regional Rank: [13]( ../../standings_europe_2025_09_01.md)<br />
<br />
Final Rank Value:  1452.1<br />
<br />
Final Rank Value (1452.1) = Starting Rank Value (1438.5) + Head To Head Adjustments (13.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.610[<sup>1</sup>](#table2)
- Bounty Collected: 0.608[<sup>2</sup>](#table1)
- Opponent Network: 0.317[<sup>2</sup>](#table1)
- LAN Wins: 0.630[<sup>2</sup>](#table1)

The average of these factors is 0.541<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1438.5
- 400 + ( ( 0.541 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 1438.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           34 |      179 | 2025-08-21 | MOUZ              | L   | 1.000      | -            | -                | -                | -         |    -2.08 | electroNic, fame, FL1T, ICY, Perfecto |
|           33 |      323 | 2025-08-15 | Spirit            | L   | 1.000      | -            | -                | -                | -         |    -1.25 | electroNic, fame, FL1T, ICY, Perfecto |
|           32 |      551 | 2025-08-09 | FaZe              | W   | 1.000      | 0.624        | 0.412 (0.257)    | 0.502 (0.313)    | -         |    24.29 | electroNic, fame, FL1T, ICY, Perfecto |
|           31 |      603 | 2025-08-06 | MIBR              | W   | 1.000      | 0.624        | 0.149 (0.093)    | -                | -         |     7.97 | electroNic, fame, FL1T, ICY, Perfecto |
|           30 |      806 | 2025-07-25 | HEROIC            | L   | 0.947      | -            | -                | -                | -         |   -11.30 | electroNic, fame, FL1T, ICY, Perfecto |
|           29 |      827 | 2025-07-24 | GamerLegion       | L   | 0.939      | -            | -                | -                | -         |   -12.89 | electroNic, fame, FL1T, ICY, Perfecto |
|           28 |      840 | 2025-07-23 | TYLOO             | W   | 0.932      | 0.769        | 0.897 (0.642)    | 0.614 (0.440)    | 1 (0.932) |    25.28 | electroNic, fame, FL1T, ICY, Perfecto |
|           27 |      972 | 2025-07-16 | MIBR              | L   | 0.887      | -            | -                | -                | -         |   -20.98 | electroNic, fame, FL1T, ICY, Perfecto |
|           26 |      987 | 2025-07-15 | TYLOO             | L   | 0.881      | -            | -                | -                | -         |    -4.63 | electroNic, fame, FL1T, ICY, Perfecto |
|           25 |     1377 | 2025-06-15 | paiN              | L   | 0.682      | -            | -                | -                | -         |   -10.25 | electroNic, fame, FL1T, FL4MUS, ICY   |
|           24 |     1407 | 2025-06-14 | Vitality          | L   | 0.675      | -            | -                | -                | -         |    -0.92 | electroNic, fame, FL1T, FL4MUS, ICY   |
|           23 |     1456 | 2025-06-13 | FURIA             | L   | 0.667      | -            | -                | -                | -         |    -4.14 | electroNic, fame, FL1T, FL4MUS, ICY   |
|           22 |     1481 | 2025-06-12 | Legacy            | W   | 0.661      | 1.000        | 0.091 (0.060)    | 0.732 (0.484)    | 1 (0.661) |     7.10 | electroNic, fame, FL1T, FL4MUS, ICY   |
|           21 |     1493 | 2025-06-12 | MOUZ              | W   | 0.660      | 1.000        | 1.000 (0.660)    | 0.648 (0.428)    | 1 (0.660) |    19.56 | electroNic, fame, FL1T, FL4MUS, ICY   |
|           20 |     1549 | 2025-06-08 | paiN              | W   | 0.634      | 0.769        | 0.233 (0.113)    | 0.330 (0.161)    | 1 (0.634) |    10.65 | electroNic, fame, FL1T, FL4MUS, ICY   |
|           19 |     1568 | 2025-06-07 | B8                | W   | 0.628      | 0.769        | -                | 0.514 (0.248)    | 1 (0.628) |     7.66 | electroNic, fame, FL1T, FL4MUS, ICY   |
|           18 |     1575 | 2025-06-07 | OG                | W   | 0.627      | 0.769        | -                | 0.879 (0.423)    | 1 (0.627) |     3.85 | electroNic, fame, FL1T, FL4MUS, ICY   |
|           17 |     1950 | 2025-05-14 | MIBR              | L   | 0.465      | -            | -                | -                | -         |   -11.26 | electroNic, fame, FL1T, FL4MUS, ICY   |
|           16 |     1991 | 2025-05-13 | Astralis          | L   | 0.458      | -            | -                | -                | -         |    -3.05 | electroNic, fame, FL1T, FL4MUS, ICY   |
|           15 |     2020 | 2025-05-11 | BIG               | W   | 0.451      | 1.000        | 0.136 (0.061)    | 0.414 (0.187)    | 1 (0.451) |     2.53 | electroNic, fame, FL1T, FL4MUS, ICY   |
|           14 |     2047 | 2025-05-11 | M80               | W   | 0.444      | 1.000        | -                | 0.822 (0.365)    | 1 (0.444) |     2.87 | electroNic, fame, FL1T, FL4MUS, ICY   |
|           13 |     2064 | 2025-05-10 | Ninjas in Pyjamas | L   | 0.439      | -            | -                | -                | -         |    -7.20 | electroNic, fame, FL1T, FL4MUS, ICY   |
|           12 |     2488 | 2025-04-22 | FlyQuest          | L   | 0.318      | -            | -                | -                | -         |    -6.97 | electroNic, fame, FL1T, FL4MUS, ICY   |
|           11 |     2502 | 2025-04-21 | Liquid            | L   | 0.311      | -            | -                | -                | -         |    -7.46 | electroNic, fame, FL1T, FL4MUS, ICY   |
|           10 |     2708 | 2025-04-11 | G2                | L   | 0.247      | -            | -                | -                | -         |    -3.79 | electroNic, fame, FL1T, FL4MUS, ICY   |
|            9 |     2724 | 2025-04-10 | Astralis          | W   | 0.238      | 1.000        | 0.833 (0.198)    | -                | 1 (0.238) |     5.98 | electroNic, fame, FL1T, FL4MUS, ICY   |
|            8 |     2770 | 2025-04-09 | GamerLegion       | L   | 0.231      | -            | -                | -                | -         |    -3.39 | electroNic, fame, FL1T, FL4MUS, ICY   |
|            7 |     2812 | 2025-04-08 | FURIA             | W   | 0.225      | 1.000        | 0.412 (0.093)    | 0.556 (0.125)    | 1 (0.225) |     5.83 | electroNic, fame, FL1T, FL4MUS, ICY   |
|            6 |     2838 | 2025-04-07 | Liquid            | W   | 0.218      | -            | -                | -                | -         |     1.69 | electroNic, fame, FL1T, FL4MUS, ICY   |
|            5 |     2859 | 2025-04-06 | Rare Atom         | L   | 0.211      | -            | -                | -                | -         |    -5.39 | electroNic, fame, FL1T, FL4MUS, ICY   |
|            4 |     3403 | 2025-03-24 | Spirit            | L   | 0.126      | -            | -                | -                | -         |    -0.17 | electroNic, fame, FL1T, FL4MUS, ICY   |
|            3 |     3415 | 2025-03-23 | Falcons           | W   | 0.119      | 0.715        | 0.966 (0.083)    | -                | -         |     3.26 | electroNic, fame, FL1T, FL4MUS, ICY   |
|            2 |     3458 | 2025-03-21 | Vitality          | L   | 0.108      | -            | -                | -                | -         |    -0.16 | electroNic, fame, FL1T, FL4MUS, ICY   |
|            1 |     3519 | 2025-03-19 | FaZe              | W   | 0.095      | -            | -                | -                | -         |     2.38 | electroNic, fame, FL1T, FL4MUS, ICY   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($96,926.07)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.23) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-08-24 |      1.000 | $20,000.00     | $20,000.00      |
| 2025-08-17 |      1.000 | $18,750.00     | $18,750.00      |
| 2025-07-25 |      0.948 | $4,500.00      | $4,264.10       |
| 2025-07-20 |      0.914 | $5,000.00      | $4,568.10       |
| 2025-06-22 |      0.728 | $20,000.00     | $14,565.68      |
| 2025-05-18 |      0.493 | $31,250.00     | $15,417.88      |
| 2025-04-27 |      0.352 | $4,000.00      | $1,409.48       |
| 2025-04-13 |      0.260 | $62,500.00     | $16,272.01      |
| 2025-03-30 |      0.168 | $10,000.00     | $1,678.82       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
