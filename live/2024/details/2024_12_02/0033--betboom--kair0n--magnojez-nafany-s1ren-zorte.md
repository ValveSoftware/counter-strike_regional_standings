### Roster Details<br />
Team Name: BetBoom<br />
Roster: KaiR0N-, Magnojez, nafany, s1ren, zorte<br />
Global Rank: [33](../../standings_global_2024_12_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_02.md)<br />
Regional Rank: [24]( ../../standings_europe_2024_12_02.md)<br />
<br />
Final Rank Value:  1258.5<br />
<br />
Final Rank Value (1258.5) = Starting Rank Value (1194.0) + Head To Head Adjustments (64.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.518[<sup>1</sup>](#table2)
- Bounty Collected: 0.435[<sup>2</sup>](#table1)
- Opponent Network: 0.210[<sup>2</sup>](#table1)
- LAN Wins: 0.420[<sup>2</sup>](#table1)

The average of these factors is 0.395<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1194.0
- 400 + ( ( 0.395 - 0.000 ) / ( 0.797 - 0.000 ) ) * 1600 = 1194.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           34 |      249 | 2024-11-20 | GamerLegion       | L   | 1.000      | -            | -                | -                | -         |   -13.84 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           33 |      255 | 2024-11-19 | SAW               | W   | 1.000      | 0.143        | 0.287 (0.041)    | -                | 1 (1.000) |    25.48 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           32 |      265 | 2024-11-18 | Nemiga            | W   | 1.000      | 0.143        | 0.490 (0.070)    | -                | 1 (1.000) |    19.77 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           31 |      276 | 2024-11-17 | fnatic            | L   | 1.000      | -            | -                | -                | -         |   -12.94 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           30 |      295 | 2024-11-17 | Vitality          | L   | 1.000      | -            | -                | -                | -         |    -1.15 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           29 |      299 | 2024-11-17 | UNiTY             | W   | 1.000      | -            | -                | -                | 1 (1.000) |     5.88 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           28 |      439 | 2024-11-12 | 500               | W   | 1.000      | 0.384        | -                | 0.664 (0.255)    | 0 (0.000) |    11.92 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           27 |      442 | 2024-11-12 | Ninjas in Pyjamas | W   | 1.000      | 0.384        | 0.086 (0.033)    | -                | 0 (0.000) |    14.26 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           26 |      476 | 2024-11-11 | ECLOT             | W   | 1.000      | 0.384        | 0.198 (0.076)    | 1.000 (0.384)    | 0 (0.000) |    16.70 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           25 |      568 | 2024-11-06 | OG                | L   | 1.000      | -            | -                | -                | -         |   -21.04 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           24 |     1073 | 2024-10-11 | FAVBET            | L   | 0.853      | -            | -                | -                | -         |   -22.12 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           23 |     1224 | 2024-10-05 | SAW               | L   | 0.815      | -            | -                | -                | -         |    -3.22 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           22 |     1236 | 2024-10-05 | Rooster           | W   | 0.813      | -            | -                | -                | 1 (0.813) |     1.47 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           21 |     1276 | 2024-10-04 | FlyQuest          | L   | 0.806      | -            | -                | -                | -         |    -6.99 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           20 |     1478 | 2024-09-28 | GamerLegion       | W   | 0.768      | 0.435        | 0.126 (0.042)    | 0.660 (0.220)    | -         |    13.94 | KaiR0N-, Magnojez, s1ren, SELLTER, zorte |
|           19 |     1488 | 2024-09-28 | 3DMAX             | W   | 0.766      | 0.435        | 0.409 (0.136)    | 0.739 (0.246)    | -         |    20.20 | KaiR0N-, Magnojez, s1ren, SELLTER, zorte |
|           18 |     1518 | 2024-09-27 | Sangal            | W   | 0.761      | 0.435        | 0.178 (0.059)    | 0.459 (0.152)    | -         |    18.80 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           17 |     1572 | 2024-09-26 | Monte Gen         | W   | 0.754      | 0.435        | -                | 0.393 (0.129)    | -         |     5.40 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           16 |     2198 | 2024-09-06 | Cloud9            | L   | 0.620      | -            | -                | -                | -         |    -9.36 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           15 |     2209 | 2024-09-06 | CYBERSHOKE        | L   | 0.619      | -            | -                | -                | -         |   -15.59 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           14 |     2240 | 2024-09-05 | Gaimin Gladiators | W   | 0.613      | 0.384        | 0.061 (0.014)    | 0.921 (0.217)    | -         |     5.02 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           13 |     2331 | 2024-09-02 | Monte             | W   | 0.593      | 0.384        | 0.053 (0.012)    | 0.743 (0.170)    | -         |     6.60 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           12 |     2603 | 2024-08-26 | LEON              | W   | 0.547      | -            | -                | -                | -         |     0.44 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           11 |     2665 | 2024-08-25 | Falcons           | L   | 0.538      | -            | -                | -                | -         |    -7.93 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|           10 |     2679 | 2024-08-24 | paiN              | L   | 0.533      | -            | -                | -                | -         |    -1.74 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|            9 |     2893 | 2024-08-18 | SINNERS           | W   | 0.494      | 0.435        | 0.092 (0.020)    | 0.875 (0.188)    | -         |     8.06 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|            8 |     2897 | 2024-08-18 | Endpoint          | W   | 0.493      | 0.435        | -                | 0.627 (0.134)    | -         |     3.12 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|            7 |     2911 | 2024-08-17 | Young Ninjas      | W   | 0.488      | -            | -                | -                | -         |     1.54 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|            6 |     2942 | 2024-08-16 | DMS               | W   | 0.480      | -            | -                | -                | -         |     1.58 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|            5 |     4674 | 2024-06-07 | Astralis          | L   | 0.013      | -            | -                | -                | -         |    -0.07 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|            4 |     4741 | 2024-06-06 | Eternal Fire      | W   | 0.007      | -            | -                | -                | 1 (0.007) |     0.20 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|            3 |     4753 | 2024-06-06 | Complexity        | W   | 0.006      | -            | -                | -                | 1 (0.006) |     0.15 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|            2 |     4789 | 2024-06-05 | BIG               | W   | 0.001      | -            | -                | -                | 1 (0.001) |     0.02 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |
|            1 |     4799 | 2024-06-05 | FURIA             | L   | 0.000      | -            | -                | -                | -         |     0.00 | KaiR0N-, Magnojez, nafany, s1ren, zorte  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($43,261.39)
- Divide that value by the 5th highest value among all rosters ($370,006.61)
- The final value (0.12) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-12 |      1.000 | $12,500.00     | $12,500.00      |
| 2024-10-06 |      0.822 | $3,000.00      | $2,466.78       |
| 2024-09-28 |      0.768 | $22,000.00     | $16,885.05      |
| 2024-08-18 |      0.494 | $22,000.00     | $10,866.57      |
| 2024-06-09 |      0.027 | $20,000.00     | $542.99         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
