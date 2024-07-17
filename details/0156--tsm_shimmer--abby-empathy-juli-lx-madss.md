### Roster Details<br />
Team Name: TSM Shimmer<br />
Roster: abby, empathy, Juli, Lx, madss<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [156](../standings_global.md)<br />
Regional Rank: [42]( ../standings_americas.md)<br />
Final Rank Value:  709.8<br />
<br />
Final Rank Value (709.8) = Starting Rank Value (747.2) + Head To Head Adjustments (-37.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.392[<sup>1</sup>](#table2)
- Bounty Collected: 0.245[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.162<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 747.2
- 400 + ( ( 0.162 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 747.2


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
|           25 |      308 | 2024-06-16 | Lotus fe         | W   | 0.996      | 0.250        | 0.007 (0.002)    | 0.041 (0.010)    | 0 (0.000) |    13.54 | abby, empathy, Juli, Lx, madss     |
|           24 |      537 | 2024-06-09 | Perseverance     | L   | 0.947      | -            | -                | -                | -         |   -21.38 | abby, empathy, Florence, Lx, madss |
|           23 |      637 | 2024-06-07 | Zomblers         | L   | 0.936      | -            | -                | -                | -         |   -22.27 | abby, empathy, Florence, Lx, madss |
|           22 |      784 | 2024-06-05 | Asian Kings      | W   | 0.921      | 0.371        | -                | 0.000 (0.000)    | 0 (0.000) |     3.66 | abby, empathy, Florence, Lx, madss |
|           21 |      827 | 2024-06-04 | Nouns            | L   | 0.915      | -            | -                | -                | -         |    -4.57 | abby, empathy, Florence, Lx, madss |
|           20 |      831 | 2024-06-04 | Strife           | L   | 0.914      | -            | -                | -                | -         |   -14.69 | abby, empathy, Florence, Lx, madss |
|           19 |      936 | 2024-05-31 | NAVI Javelins    | L   | 0.889      | -            | -                | -                | -         |    -7.61 | abby, empathy, Lx, madss, phoebe   |
|           18 |      943 | 2024-05-31 | Fluxo Demons     | L   | 0.888      | -            | -                | -                | -         |    -7.81 | abby, empathy, Lx, madss, phoebe   |
|           17 |     1056 | 2024-05-26 | FlyQuest RED     | L   | 0.855      | -            | -                | -                | -         |   -11.61 | abby, empathy, Lx, madss, phoebe   |
|           16 |     1058 | 2024-05-26 | Karma            | W   | 0.854      | 0.303        | 0.006 (0.002)    | 0.100 (0.026)    | 0 (0.000) |    10.76 | abby, empathy, Lx, madss, phoebe   |
|           15 |     1656 | 2024-05-05 | Lotus fe         | W   | 0.715      | 0.250        | 0.007 (0.001)    | 0.041 (0.007)    | 0 (0.000) |     8.42 | abby, empathy, Lx, madss, phoebe   |
|           14 |     2010 | 2024-04-19 | Limitless Angels | W   | 0.609      | 0.322        | 0.004 (0.001)    | 0.070 (0.014)    | 0 (0.000) |     7.41 | abby, empathy, Lx, madss, phoebe   |
|           13 |     2188 | 2024-04-14 | FlyQuest RED     | L   | 0.575      | -            | -                | -                | -         |    -7.97 | abby, empathy, Lx, madss, phoebe   |
|           12 |     2237 | 2024-04-11 | COVEN            | W   | 0.556      | 0.322        | 0.002 (0.000)    | -                | 0 (0.000) |     3.71 | abby, empathy, Lx, madss, phoebe   |
|           11 |     2402 | 2024-04-07 | Limitless Angels | W   | 0.529      | 0.250        | 0.004 (0.001)    | 0.070 (0.009)    | 0 (0.000) |     6.45 | abby, empathy, Lx, madss, phoebe   |
|           10 |     2501 | 2024-04-03 | WG Bandits       | W   | 0.502      | 0.322        | 0.003 (0.000)    | 0.032 (0.005)    | 0 (0.000) |     5.42 | abby, empathy, Lx, madss, phoebe   |
|            9 |     2631 | 2024-03-27 | cleanup crew fe  | W   | 0.456      | 0.322        | 0.003 (0.000)    | 0.032 (0.005)    | 0 (0.000) |     5.47 | abby, empathy, Lx, madss, phoebe   |
|            8 |     2728 | 2024-03-21 | Karma            | W   | 0.416      | 0.322        | 0.006 (0.001)    | 0.100 (0.013)    | 0 (0.000) |     5.54 | abby, empathy, Lx, madss, phoebe   |
|            7 |     2868 | 2024-03-14 | Nouns fe         | W   | 0.369      | 0.322        | 0.004 (0.001)    | 0.051 (0.006)    | -         |     4.86 | abby, empathy, Lx, madss, phoebe   |
|            6 |     3077 | 2024-03-06 | FlyQuest RED     | L   | 0.317      | -            | -                | -                | -         |    -4.42 | abby, empathy, Lx, madss, phoebe   |
|            5 |     3165 | 2024-03-03 | FlyQuest RED     | L   | 0.296      | -            | -                | -                | -         |    -4.23 | abby, empathy, Lx, madss, phoebe   |
|            4 |     3307 | 2024-02-25 | FlyQuest RED     | L   | 0.249      | -            | -                | -                | -         |    -3.65 | abby, empathy, Lx, madss, phoebe   |
|            3 |     3722 | 2024-02-04 | FlyQuest RED     | L   | 0.109      | -            | -                | -                | -         |    -1.61 | abby, empathy, Lx, madss, phoebe   |
|            2 |     3877 | 2024-01-28 | FlyQuest RED     | L   | 0.062      | -            | -                | -                | -         |    -0.93 | abby, empathy, Lx, madss, phoebe   |
|            1 |     4014 | 2024-01-21 | NA savers        | W   | 0.016      | -            | -                | -                | -         |     0.10 | abby, empathy, Lx, phoebe, raynee  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,891.51)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.996 | $750.00        | $746.86         |
| 2024-06-02 |      0.902 | $4,000.00      | $3,606.37       |
| 2024-05-26 |      0.855 | $1,500.00      | $1,282.37       |
| 2024-05-05 |      0.715 | $750.00        | $536.58         |
| 2024-04-14 |      0.575 | $250.00        | $143.87         |
| 2024-04-07 |      0.529 | $750.00        | $396.61         |
| 2024-03-03 |      0.296 | $250.00        | $73.88          |
| 2024-02-25 |      0.249 | $250.00        | $62.21          |
| 2024-02-04 |      0.109 | $250.00        | $27.22          |
| 2024-01-28 |      0.062 | $250.00        | $15.55          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
