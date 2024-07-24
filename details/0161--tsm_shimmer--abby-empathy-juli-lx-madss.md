### Roster Details<br />
Team Name: TSM Shimmer<br />
Roster: abby, empathy, Juli, Lx, madss<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [161](../standings_global.md)<br />
Regional Rank: [44]( ../standings_americas.md)<br />
Final Rank Value:  683.8<br />
<br />
Final Rank Value (683.8) = Starting Rank Value (717.2) + Head To Head Adjustments (-33.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.380[<sup>1</sup>](#table2)
- Bounty Collected: 0.239[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.157<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 717.2
- 400 + ( ( 0.157 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 717.2


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
|           24 |      596 | 2024-06-16 | Lotus fe         | W   | 0.949      | 0.250        | 0.006 (0.001)    | 0.041 (0.010)    | 0 (0.000) |    13.16 | abby, empathy, Juli, Lx, madss     |
|           23 |      825 | 2024-06-09 | Perseverance     | L   | 0.900      | -            | -                | -                | -         |   -19.85 | abby, empathy, Florence, Lx, madss |
|           22 |      925 | 2024-06-07 | Zomblers         | L   | 0.889      | -            | -                | -                | -         |   -20.66 | abby, empathy, Florence, Lx, madss |
|           21 |     1072 | 2024-06-05 | Asian Kings      | W   | 0.873      | 0.371        | -                | 0.000 (0.000)    | 0 (0.000) |     3.99 | abby, empathy, Florence, Lx, madss |
|           20 |     1115 | 2024-06-04 | Nouns            | L   | 0.868      | -            | -                | -                | -         |    -4.59 | abby, empathy, Florence, Lx, madss |
|           19 |     1119 | 2024-06-04 | Strife           | L   | 0.867      | -            | -                | -                | -         |   -13.96 | abby, empathy, Florence, Lx, madss |
|           18 |     1224 | 2024-05-31 | NAVI Javelins    | L   | 0.842      | -            | -                | -                | -         |    -7.71 | abby, empathy, Lx, madss, phoebe   |
|           17 |     1231 | 2024-05-31 | Fluxo Demons     | L   | 0.841      | -            | -                | -                | -         |    -7.93 | abby, empathy, Lx, madss, phoebe   |
|           16 |     1344 | 2024-05-26 | FlyQuest RED     | L   | 0.808      | -            | -                | -                | -         |   -11.28 | abby, empathy, Lx, madss, phoebe   |
|           15 |     1346 | 2024-05-26 | Karma            | W   | 0.807      | 0.303        | 0.005 (0.001)    | 0.090 (0.022)    | 0 (0.000) |    10.33 | abby, empathy, Lx, madss, phoebe   |
|           14 |     1944 | 2024-05-05 | Lotus fe         | W   | 0.668      | 0.250        | 0.006 (0.001)    | 0.041 (0.007)    | 0 (0.000) |     8.12 | abby, empathy, Lx, madss, phoebe   |
|           13 |     2298 | 2024-04-19 | Limitless Angels | W   | 0.562      | 0.322        | 0.003 (0.001)    | 0.062 (0.011)    | 0 (0.000) |     6.97 | abby, empathy, Lx, madss, phoebe   |
|           12 |     2476 | 2024-04-14 | FlyQuest RED     | L   | 0.528      | -            | -                | -                | -         |    -7.53 | abby, empathy, Lx, madss, phoebe   |
|           11 |     2525 | 2024-04-11 | COVEN            | W   | 0.508      | 0.322        | 0.002 (0.000)    | -                | 0 (0.000) |     3.70 | abby, empathy, Lx, madss, phoebe   |
|           10 |     2690 | 2024-04-07 | Limitless Angels | W   | 0.482      | 0.250        | 0.003 (0.000)    | 0.062 (0.007)    | 0 (0.000) |     6.00 | abby, empathy, Lx, madss, phoebe   |
|            9 |     2789 | 2024-04-03 | WG Bandits       | W   | 0.455      | 0.322        | 0.002 (0.000)    | 0.028 (0.004)    | 0 (0.000) |     5.10 | abby, empathy, Lx, madss, phoebe   |
|            8 |     2919 | 2024-03-27 | cleanup crew fe  | W   | 0.409      | 0.322        | 0.002 (0.000)    | 0.028 (0.004)    | 0 (0.000) |     5.04 | abby, empathy, Lx, madss, phoebe   |
|            7 |     3016 | 2024-03-21 | Karma            | W   | 0.369      | 0.322        | 0.005 (0.001)    | 0.090 (0.011)    | 0 (0.000) |     4.98 | abby, empathy, Lx, madss, phoebe   |
|            6 |     3156 | 2024-03-14 | Nouns fe         | W   | 0.322      | 0.322        | 0.004 (0.000)    | 0.045 (0.005)    | -         |     4.30 | abby, empathy, Lx, madss, phoebe   |
|            5 |     3365 | 2024-03-06 | FlyQuest RED     | L   | 0.269      | -            | -                | -                | -         |    -3.86 | abby, empathy, Lx, madss, phoebe   |
|            4 |     3453 | 2024-03-03 | FlyQuest RED     | L   | 0.248      | -            | -                | -                | -         |    -3.64 | abby, empathy, Lx, madss, phoebe   |
|            3 |     3595 | 2024-02-25 | FlyQuest RED     | L   | 0.202      | -            | -                | -                | -         |    -3.01 | abby, empathy, Lx, madss, phoebe   |
|            2 |     4010 | 2024-02-04 | FlyQuest RED     | L   | 0.062      | -            | -                | -                | -         |    -0.93 | abby, empathy, Lx, madss, phoebe   |
|            1 |     4165 | 2024-01-28 | FlyQuest RED     | L   | 0.015      | -            | -                | -                | -         |    -0.23 | abby, empathy, Lx, madss, phoebe   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,466.49)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.949 | $750.00        | $711.44         |
| 2024-06-02 |      0.854 | $4,000.00      | $3,417.47       |
| 2024-05-26 |      0.808 | $1,500.00      | $1,211.53       |
| 2024-05-05 |      0.668 | $750.00        | $501.17         |
| 2024-04-14 |      0.528 | $250.00        | $132.06         |
| 2024-04-07 |      0.482 | $750.00        | $361.19         |
| 2024-03-03 |      0.248 | $250.00        | $62.08          |
| 2024-02-25 |      0.202 | $250.00        | $50.41          |
| 2024-02-04 |      0.062 | $250.00        | $15.41          |
| 2024-01-28 |      0.015 | $250.00        | $3.74           |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
