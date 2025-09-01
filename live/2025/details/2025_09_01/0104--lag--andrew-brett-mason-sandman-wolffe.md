### Roster Details<br />
Team Name: LAG<br />
Roster: Andrew, brett, mason, Sandman, Wolffe<br />
Global Rank: [104](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_09_01.md)<br />
Regional Rank: [25]( ../../standings_americas_2025_09_01.md)<br />
<br />
Final Rank Value:  802.2<br />
<br />
Final Rank Value (802.2) = Starting Rank Value (783.0) + Head To Head Adjustments (19.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.353[<sup>1</sup>](#table2)
- Bounty Collected: 0.271[<sup>2</sup>](#table1)
- Opponent Network: 0.071[<sup>2</sup>](#table1)
- LAN Wins: 0.103[<sup>2</sup>](#table1)

The average of these factors is 0.200<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 783.0
- 400 + ( ( 0.200 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 783.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent            | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           46 |      108 | 2025-08-26 | BOSS                | L   | 1.000      | -            | -                | -                | -         |   -16.11 | consti, djay, mason, Sandman, Wolffe  |
|           45 |      246 | 2025-08-17 | MONEY CREW          | W   | 1.000      | 0.278        | 0.004 (0.001)    | 0.116 (0.032)    | 0 (0.000) |     9.99 | consti, djay, mason, Sandman, Wolffe  |
|           44 |      301 | 2025-08-15 | Take Flyte          | W   | 1.000      | 0.363        | -                | 0.099 (0.036)    | 0 (0.000) |     5.99 | Aureo, brett, mason, Sandman, Wolffe  |
|           43 |      308 | 2025-08-15 | InControl           | W   | 1.000      | 0.278        | 0.002 (0.001)    | 0.211 (0.059)    | 0 (0.000) |    13.59 | brett, consti, mason, Sandman, Wolffe |
|           42 |      340 | 2025-08-14 | NRG                 | L   | 1.000      | -            | -                | -                | -         |    -3.73 | Andrew, brett, mason, Sandman, Wolffe |
|           41 |      422 | 2025-08-12 | Arrival Seven       | W   | 1.000      | 0.363        | 0.005 (0.002)    | 0.200 (0.073)    | 0 (0.000) |    10.97 | Andrew, brett, mason, Sandman, Wolffe |
|           40 |      470 | 2025-08-11 | Akimbo              | W   | 1.000      | 0.363        | 0.009 (0.003)    | -                | 0 (0.000) |    12.38 | brett, consti, mason, Sandman, Wolffe |
|           39 |      692 | 2025-07-30 | Wildcard            | L   | 0.982      | -            | -                | -                | -         |    -7.01 | Andrew, brett, mason, Sandman, Wolffe |
|           38 |      719 | 2025-07-28 | MIGHT               | W   | 0.969      | 0.384        | -                | 0.224 (0.083)    | 0 (0.000) |     8.63 | Andrew, brett, mason, Sandman, Wolffe |
|           37 |      784 | 2025-07-26 | Marsborne           | L   | 0.955      | -            | -                | -                | -         |    -9.13 | Andrew, brett, mason, Sandman, Wolffe |
|           36 |      814 | 2025-07-24 | Party Astronauts    | W   | 0.943      | 0.384        | 0.003 (0.001)    | 0.190 (0.069)    | 0 (0.000) |    11.31 | brett, consti, mason, Sandman, Wolffe |
|           35 |      881 | 2025-07-19 | Marsborne           | L   | 0.907      | -            | -                | -                | -         |    -8.81 | brett, consti, mason, Sandman, Wolffe |
|           34 |      911 | 2025-07-18 | Derpy diamond dudes | W   | 0.902      | -            | -                | -                | 1 (0.902) |     3.11 | brett, consti, mason, Sandman, Wolffe |
|           33 |      919 | 2025-07-18 | Marsborne           | L   | 0.901      | -            | -                | -                | -         |    -9.08 | brett, consti, mason, Sandman, Wolffe |
|           32 |     1027 | 2025-07-13 | BLUEJAYS            | L   | 0.868      | -            | -                | -                | -         |    -6.50 | brett, consti, mason, Sandman, Wolffe |
|           31 |     1044 | 2025-07-12 | Arrival Seven       | W   | 0.862      | 0.143        | 0.005 (0.001)    | -                | 0 (0.000) |    11.47 | brett, consti, mason, Sandman, Wolffe |
|           30 |     1046 | 2025-07-12 | Getting Info        | L   | 0.862      | -            | -                | -                | -         |   -11.91 | brett, consti, mason, Sandman, Wolffe |
|           29 |     1077 | 2025-07-11 | Party Astronauts    | W   | 0.855      | -            | -                | -                | 0 (0.000) |    10.28 | brett, consti, mason, Sandman, Wolffe |
|           28 |     1223 | 2025-06-29 | Getting Info        | L   | 0.776      | -            | -                | -                | -         |   -13.65 | brett, consti, mason, Sandman, Wolffe |
|           27 |     1239 | 2025-06-26 | BLUEJAYS            | W   | 0.756      | 0.333        | 0.040 (0.010)    | 0.841 (0.212)    | -         |    18.39 | brett, consti, mason, Sandman, Wolffe |
|           26 |     1343 | 2025-06-17 | MIGHT               | W   | 0.696      | 0.333        | -                | 0.224 (0.052)    | -         |     6.71 | brett, consti, mason, Sandman, Wolffe |
|           25 |     1376 | 2025-06-15 | Getting Info        | L   | 0.683      | -            | -                | -                | -         |   -12.39 | brett, consti, mason, Sandman, Wolffe |
|           24 |     1399 | 2025-06-14 | Legacy Kingdom      | W   | 0.676      | 0.333        | -                | 0.259 (0.058)    | -         |     7.25 | brett, consti, mason, Sandman, Wolffe |
|           23 |     1502 | 2025-06-11 | Party Astronauts    | L   | 0.656      | -            | -                | -                | -         |   -12.11 | brett, consti, mason, Sandman, Wolffe |
|           22 |     1533 | 2025-06-09 | Wanted Goons        | W   | 0.643      | 0.333        | -                | 0.152 (0.033)    | -         |     5.42 | brett, consti, mason, Sandman, Wolffe |
|           21 |     1637 | 2025-06-01 | Akimbo              | W   | 0.589      | 0.303        | 0.005 (0.001)    | -                | -         |     5.88 | brett, consti, mason, Sandman, Wolffe |
|           20 |     2122 | 2025-05-07 | Legacy              | L   | 0.423      | -            | -                | -                | -         |    -0.76 | brett, consti, mason, Sandman, Seb    |
|           19 |     2154 | 2025-05-06 | BLUEJAYS            | L   | 0.417      | -            | -                | -                | -         |    -2.99 | brett, consti, mason, Sandman, Seb    |
|           18 |     2404 | 2025-04-26 | Ninjas in Pyjamas   | L   | 0.350      | -            | -                | -                | -         |    -0.31 | brett, consti, mason, Sandman, Seb    |
|           17 |     2663 | 2025-04-13 | JERSA               | L   | 0.263      | -            | -                | -                | -         |    -6.83 | brett, consti, mason, Sandman, Seb    |
|           16 |     2714 | 2025-04-10 | Chicken Coop        | L   | 0.243      | -            | -                | -                | -         |    -3.94 | brett, consti, mason, Sandman, Seb    |
|           15 |     2725 | 2025-04-09 | Akimbo              | W   | 0.236      | 0.477        | 0.005 (0.001)    | -                | -         |     2.34 | brett, consti, mason, Sandman, Seb    |
|           14 |     2731 | 2025-04-09 | Akimbo              | W   | 0.236      | 0.477        | 0.005 (0.001)    | -                | -         |     2.38 | brett, consti, mason, Sandman, Seb    |
|           13 |     2777 | 2025-04-08 | Fisher College      | L   | 0.229      | -            | -                | -                | -         |    -4.68 | brett, consti, mason, Sandman, Seb    |
|           12 |     2939 | 2025-04-02 | InControl           | W   | 0.189      | -            | -                | -                | -         |     2.45 | brett, consti, mason, Sandman, Seb    |
|           11 |     2946 | 2025-04-02 | InControl           | W   | 0.189      | -            | -                | -                | -         |     2.49 | brett, consti, mason, Sandman, Seb    |
|           10 |     3005 | 2025-04-01 | BLUEJAYS            | L   | 0.183      | -            | -                | -                | -         |    -1.27 | brett, consti, mason, Sandman, Seb    |
|            9 |     3015 | 2025-04-01 | BLUEJAYS            | L   | 0.183      | -            | -                | -                | -         |    -1.28 | brett, consti, mason, Sandman, Seb    |
|            8 |     3099 | 2025-03-29 | Mythic              | L   | 0.163      | -            | -                | -                | -         |    -4.16 | brett, consti, mason, Sandman, Seb    |
|            7 |     3109 | 2025-03-29 | Aether              | W   | 0.162      | -            | -                | -                | -         |     0.53 | brett, consti, mason, Sandman, Seb    |
|            6 |     3167 | 2025-03-28 | M80                 | L   | 0.156      | -            | -                | -                | -         |    -0.49 | brett, consti, mason, Sandman, Seb    |
|            5 |     3239 | 2025-03-27 | Mythic              | W   | 0.149      | -            | -                | -                | -         |     0.88 | brett, consti, mason, Sandman, Seb    |
|            4 |     3302 | 2025-03-26 | Chicken Coop        | W   | 0.143      | -            | -                | -                | -         |     2.33 | brett, consti, mason, Sandman, Seb    |
|            3 |     3308 | 2025-03-26 | Chicken Coop        | W   | 0.143      | -            | -                | -                | -         |     2.36 | brett, consti, mason, Sandman, Seb    |
|            2 |     3348 | 2025-03-25 | Arrival Seven       | L   | 0.137      | -            | -                | -                | -         |    -2.55 | brett, consti, mason, Sandman, Seb    |
|            1 |     3353 | 2025-03-25 | Arrival Seven       | W   | 0.136      | -            | -                | -                | -         |     1.77 | brett, consti, mason, Sandman, Seb    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,238.11)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-08-17 |      1.000 | $1,750.00      | $1,750.00       |
| 2025-06-30 |      0.783 | $1,000.00      | $782.83         |
| 2025-06-01 |      0.589 | $4,000.00      | $2,356.64       |
| 2025-05-11 |      0.450 | $3,000.00      | $1,348.65       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
