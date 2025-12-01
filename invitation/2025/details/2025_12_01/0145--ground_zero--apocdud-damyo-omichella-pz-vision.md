### Roster Details<br />
Team Name: Ground Zero<br />
Roster: apocdud, damyo, Omichella, pz, vision<br />
Global Rank: [145](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_12_01.md)<br />
Regional Rank: [17]( ../../standings_asia_2025_12_01.md)<br />
<br />
Final Rank Value:  779.6<br />
<br />
Final Rank Value (779.6) = Starting Rank Value (714.1) + Head To Head Adjustments (65.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.327[<sup>1</sup>](#table2)
- Bounty Collected: 0.247[<sup>2</sup>](#table1)
- Opponent Network: 0.087[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.165<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 714.1
- 400 + ( ( 0.165 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 714.1


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
|           36 |       62 | 2025-11-27 | THUNDER dOWNUNDER | W   | 1.000      | 0.314        | 0.003 (0.001)    | 0.153 (0.048)    | 0 (0.000) |    13.20 | apocdud, damyo, Omichella, pz, vision  |
|           35 |       71 | 2025-11-26 | Mindfreak         | W   | 1.000      | 0.314        | 0.005 (0.002)    | 0.471 (0.148)    | 0 (0.000) |    16.93 | apocdud, damyo, Omichella, pz, vision  |
|           34 |       73 | 2025-11-26 | LITE              | W   | 1.000      | 0.314        | 0.001 (0.000)    | 0.153 (0.048)    | 0 (0.000) |    10.68 | apocdud, damyo, Omichella, pz, vision  |
|           33 |       91 | 2025-11-25 | Underground       | W   | 1.000      | 0.314        | 0.001 (0.000)    | 0.162 (0.051)    | 0 (0.000) |    14.03 | apocdud, damyo, Omichella, pz, vision  |
|           32 |      128 | 2025-11-24 | Mindfreak         | L   | 1.000      | -            | -                | -                | -         |   -12.46 | apocdud, damyo, Omichella, pz, vision  |
|           31 |      212 | 2025-11-21 | Rooster           | W   | 1.000      | 0.314        | 0.003 (0.001)    | 0.302 (0.095)    | 0 (0.000) |    20.30 | apocdud, damyo, Omichella, pz, vision  |
|           30 |      400 | 2025-11-12 | Rooster           | L   | 1.000      | -            | -                | -                | -         |    -9.71 | apocdud, damyo, Omichella, pz, vision  |
|           29 |      425 | 2025-11-11 | SemperFi          | L   | 1.000      | -            | -                | -                | -         |    -9.27 | apocdud, damyo, Omichella, pz, vision  |
|           28 |     1123 | 2025-10-24 | Mindfreak         | W   | 0.945      | 0.278        | 0.005 (0.001)    | 0.471 (0.124)    | 0 (0.000) |    17.46 | apocdud, damyo, Omichella, pz, vision  |
|           27 |     1173 | 2025-10-23 | FURY              | W   | 0.938      | 0.278        | -                | 0.148 (0.038)    | 0 (0.000) |     7.00 | apocdud, damyo, Omichella, pz, vision  |
|           26 |     1643 | 2025-10-07 | Rooster           | L   | 0.831      | -            | -                | -                | -         |   -12.24 | apocdud, damyo, pz, vision, yourwombat |
|           25 |     1703 | 2025-10-06 | SemperFi          | L   | 0.825      | -            | -                | -                | -         |    -8.87 | apocdud, damyo, pz, vision, yourwombat |
|           24 |     1759 | 2025-10-05 | FURY              | W   | 0.818      | -            | -                | -                | 0 (0.000) |     5.47 | apocdud, damyo, Omichella, pz, vision  |
|           23 |     1768 | 2025-10-04 | SemperFi          | L   | 0.817      | -            | -                | -                | -         |    -9.26 | apocdud, damyo, Omichella, pz, vision  |
|           22 |     1769 | 2025-10-04 | Mindfreak         | W   | 0.816      | 0.302        | 0.005 (0.001)    | 0.471 (0.116)    | 0 (0.000) |    15.60 | apocdud, damyo, Omichella, pz, vision  |
|           21 |     1809 | 2025-10-03 | SemperFi          | L   | 0.810      | -            | -                | -                | -         |    -9.29 | apocdud, damyo, Omichella, pz, vision  |
|           20 |     1812 | 2025-10-03 | Mindfreak         | W   | 0.809      | 0.302        | 0.005 (0.001)    | 0.471 (0.115)    | 0 (0.000) |    16.02 | apocdud, damyo, Omichella, pz, vision  |
|           19 |     2043 | 2025-09-27 | Vantage           | W   | 0.770      | 0.302        | 0.000 (0.000)    | -                | -         |     8.89 | apocdud, damyo, Omichella, pz, vision  |
|           18 |     2049 | 2025-09-27 | BBBMBCBS          | W   | 0.769      | -            | -                | -                | -         |     6.76 | apocdud, damyo, Omichella, pz, vision  |
|           17 |     2342 | 2025-09-19 | SemperFi          | L   | 0.711      | -            | -                | -                | -         |    -8.69 | apocdud, damyo, Omichella, pz, vision  |
|           16 |     2375 | 2025-09-18 | KZG               | W   | 0.704      | -            | -                | -                | -         |     8.54 | apocdud, damyo, Omichella, pz, vision  |
|           15 |     2654 | 2025-09-11 | Rooster           | L   | 0.657      | -            | -                | -                | -         |    -9.26 | apocdud, damyo, pz, vision, yourwombat |
|           14 |     2699 | 2025-09-10 | FURY              | W   | 0.652      | -            | -                | -                | -         |     4.97 | apocdud, damyo, Omichella, pz, vision  |
|           13 |     2700 | 2025-09-10 | Mindfreak         | W   | 0.652      | 0.278        | 0.005 (0.001)    | 0.471 (0.085)    | -         |    14.17 | apocdud, damyo, Omichella, pz, vision  |
|           12 |     2755 | 2025-09-09 | SemperFi          | L   | 0.645      | -            | -                | -                | -         |    -7.47 | apocdud, damyo, Omichella, pz, vision  |
|           11 |     2759 | 2025-09-09 | SemperFi          | L   | 0.644      | -            | -                | -                | -         |    -7.88 | apocdud, damyo, Omichella, pz, vision  |
|           10 |     2799 | 2025-09-08 | KZG               | W   | 0.638      | -            | -                | -                | -         |     7.92 | apocdud, damyo, Omichella, pz, vision  |
|            9 |     2853 | 2025-09-06 | KZG               | W   | 0.625      | -            | -                | -                | -         |     7.97 | apocdud, damyo, Omichella, pz, vision  |
|            8 |     3456 | 2025-08-13 | Rooster           | L   | 0.465      | -            | -                | -                | -         |    -7.00 | apocdud, damyo, Drox, pz, vision       |
|            7 |     3558 | 2025-08-11 | Mindfreak         | L   | 0.451      | -            | -                | -                | -         |    -3.45 | apocdud, damyo, Drox, pz, vision       |
|            6 |     3728 | 2025-08-01 | Chinggis Warriors | L   | 0.386      | -            | -                | -                | -         |    -8.59 | apocdud, damyo, Drox, pz, vision       |
|            5 |     4002 | 2025-07-17 | SemperFi          | L   | 0.285      | -            | -                | -                | -         |    -4.04 | apocdud, damyo, Drox, pz, vision       |
|            4 |     4030 | 2025-07-16 | Animus Victoria   | W   | 0.278      | -            | -                | -                | -         |     2.43 | apocdud, damyo, Drox, pz, vision       |
|            3 |     4051 | 2025-07-15 | KZG               | L   | 0.272      | -            | -                | -                | -         |    -5.41 | apocdud, damyo, Drox, pz, vision       |
|            2 |     4116 | 2025-07-12 | FURY              | W   | 0.251      | -            | -                | -                | -         |     1.87 | apocdud, damyo, Drox, pz, vision       |
|            1 |     4152 | 2025-07-11 | FengDa            | L   | 0.245      | -            | -                | -                | -         |    -1.88 | apocdud, damyo, Drox, pz, vision       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,980.63)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-27 |      1.000 | $3,592.00      | $3,592.00       |
| 2025-10-04 |      0.817 | $1,317.00      | $1,075.78       |
| 2025-09-12 |      0.665 | $327.00        | $217.40         |
| 2025-07-18 |      0.291 | $328.00        | $95.45          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
