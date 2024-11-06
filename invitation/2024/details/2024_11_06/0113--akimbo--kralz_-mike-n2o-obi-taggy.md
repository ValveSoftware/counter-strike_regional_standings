### Roster Details<br />
Team Name: Akimbo<br />
Roster: kralz , Mike, N2o, obi, taggy<br />
Global Rank: [113](../../standings_global_2024_11_06.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_11_06.md)<br />
Regional Rank: [9]( ../../standings_asia_2024_11_06.md)<br />
<br />
Final Rank Value:  788.1<br />
<br />
Final Rank Value (788.1) = Starting Rank Value (759.9) + Head To Head Adjustments (28.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.356[<sup>1</sup>](#table2)
- Bounty Collected: 0.251[<sup>2</sup>](#table1)
- Opponent Network: 0.039[<sup>2</sup>](#table1)
- LAN Wins: 0.088[<sup>2</sup>](#table1)

The average of these factors is 0.183<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 759.9
- 400 + ( ( 0.183 - 0.000 ) / ( 0.815 - 0.000 ) ) * 1600 = 759.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |      866 | 2024-09-29 | LAG              | L   | 0.949      | -            | -                | -                | -         |   -19.94 | kralz , Mike, N2o, obi, taggy      |
|           19 |     1182 | 2024-09-21 | undefined        | W   | 0.897      | 0.372        | 0.009 (0.003)    | 0.255 (0.085)    | 0 (0.000) |    13.15 | kmrn, kralz , laxiee, N2o, obi     |
|           18 |     1187 | 2024-09-21 | E-Xolos LAZER    | W   | 0.896      | 0.371        | 0.008 (0.003)    | 0.397 (0.132)    | 0 (0.000) |    14.49 | kmrn, kralz , N2o, obi, taggy      |
|           17 |     1481 | 2024-09-11 | Aether           | W   | 0.830      | 0.371        | 0.000 (0.000)    | 0.100 (0.031)    | 0 (0.000) |     4.12 | kmrn, kralz , laxiee, N2o, obi     |
|           16 |     1486 | 2024-09-11 | InControl        | W   | 0.828      | 0.372        | 0.007 (0.002)    | 0.130 (0.040)    | 0 (0.000) |     9.58 | kmrn, kralz , laxiee, N2o, obi     |
|           15 |     1542 | 2024-09-09 | Homyno           | W   | 0.817      | 0.372        | 0.003 (0.001)    | 0.094 (0.029)    | 0 (0.000) |     7.43 | kmrn, kralz , laxiee, N2o, obi     |
|           14 |     1578 | 2024-09-07 | Nouns            | L   | 0.802      | -            | -                | -                | -         |    -4.13 | kmrn, kralz , laxiee, N2o, obi     |
|           13 |     1580 | 2024-09-07 | Unjustified      | W   | 0.802      | -            | -                | -                | 1 (0.802) |     2.93 | kmrn, kralz , laxiee, N2o, obi     |
|           12 |     3740 | 2024-06-16 | E-Xolos LAZER    | L   | 0.250      | -            | -                | -                | -         |    -3.77 | calamity, kralz , laxiee, N2o, obi |
|           11 |     3767 | 2024-06-15 | Take Flyte       | L   | 0.243      | -            | -                | -                | -         |    -3.65 | calamity, kralz , laxiee, N2o, obi |
|           10 |     3773 | 2024-06-15 | Legacy           | L   | 0.242      | -            | -                | -                | -         |    -1.74 | calamity, kralz , laxiee, N2o, obi |
|            9 |     3803 | 2024-06-14 | Homyno           | W   | 0.236      | 0.143        | 0.003 (0.000)    | 0.094 (0.003)    | 0 (0.000) |     2.38 | calamity, kralz , laxiee, N2o, obi |
|            8 |     3809 | 2024-06-14 | Penance          | W   | 0.235      | 0.371        | 0.001 (0.000)    | 0.103 (0.009)    | 0 (0.000) |     2.45 | calamity, kralz , laxiee, N2o, obi |
|            7 |     3920 | 2024-06-10 | Legacy           | L   | 0.210      | -            | -                | -                | -         |    -1.50 | calamity, kralz , laxiee, N2o, obi |
|            6 |     3954 | 2024-06-09 | E-Xolos LAZER    | W   | 0.203      | 0.368        | 0.008 (0.001)    | 0.397 (0.030)    | 0 (0.000) |     3.31 | calamity, kralz , laxiee, N2o, obi |
|            5 |     4126 | 2024-06-06 | FLUFFY AIMERS    | W   | 0.183      | 0.371        | 0.014 (0.001)    | 0.509 (0.035)    | 0 (0.000) |     3.17 | calamity, kralz , laxiee, N2o, obi |
|            4 |     4137 | 2024-06-06 | Legacy           | L   | 0.182      | -            | -                | -                | -         |    -1.29 | calamity, kralz , laxiee, N2o, obi |
|            3 |     4253 | 2024-06-04 | Final Form       | W   | 0.169      | 0.371        | -                | 0.015 (0.001)    | -         |     0.95 | calamity, kralz , laxiee, N2o, obi |
|            2 |     4289 | 2024-06-03 | Villainous       | W   | 0.163      | 0.368        | 0.001 (0.000)    | -                | -         |     1.04 | calamity, kralz , laxiee, N2o, obi |
|            1 |     4643 | 2024-05-20 | Party Astronauts | L   | 0.070      | -            | -                | -                | -         |    -0.80 | calamity, kralz , laxiee, N2o, obi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,368.78)
- Divide that value by the 5th highest value among all rosters ($478,523.89)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-21 |      0.897 | $7,000.00      | $6,279.77       |
| 2024-06-16 |      0.250 | $750.00        | $187.30         |
| 2024-06-10 |      0.210 | $4,300.00      | $901.71         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
