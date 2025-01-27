### Roster Details<br />
Team Name: vagrants<br />
Roster: brett, Cyrix, mason, Sandman, Seb<br />
Global Rank: [155](../../standings_global_2025_01_27.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_27.md)<br />
Regional Rank: [41]( ../../standings_americas_2025_01_27.md)<br />
<br />
Final Rank Value:  716.0<br />
<br />
Final Rank Value (716.0) = Starting Rank Value (724.7) + Head To Head Adjustments (-8.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.299[<sup>1</sup>](#table2)
- Bounty Collected: 0.265[<sup>2</sup>](#table1)
- Opponent Network: 0.033[<sup>2</sup>](#table1)
- LAN Wins: 0.068[<sup>2</sup>](#table1)

The average of these factors is 0.166<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 724.7
- 400 + ( ( 0.166 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 724.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           23 |       76 | 2025-01-23 | Chicken Coop       | L   | 1.000      | -            | -                | -                | -         |   -18.72 | brett, Cyrix, mason, Sandman, Seb |
|           22 |       83 | 2025-01-23 | Chicken Coop       | W   | 1.000      | 0.477        | 0.014 (0.007)    | 0.158 (0.076)    | 0 (0.000) |    12.52 | brett, Cyrix, mason, Sandman, Seb |
|           21 |      409 | 2024-12-14 | Nouns              | L   | 0.908      | -            | -                | -                | -         |    -3.47 | Cyrix, mason, micro, Sandman, Seb |
|           20 |     1754 | 2024-10-09 | timbermen          | L   | 0.469      | -            | -                | -                | -         |    -8.19 | Cyrix, DJF, Sandman, Seb, Tender  |
|           19 |     1760 | 2024-10-09 | timbermen          | W   | 0.469      | 0.477        | 0.007 (0.002)    | 0.100 (0.022)    | 0 (0.000) |     6.71 | Cyrix, DJF, Sandman, Seb, Tender  |
|           18 |     1789 | 2024-10-08 | Mythic             | W   | 0.462      | 0.477        | 0.000 (0.000)    | 0.082 (0.018)    | 0 (0.000) |     3.85 | Cyrix, DJF, Sandman, Seb, Tender  |
|           17 |     1795 | 2024-10-08 | Mythic             | W   | 0.462      | 0.477        | 0.000 (0.000)    | 0.082 (0.018)    | 0 (0.000) |     3.98 | Cyrix, DJF, Sandman, Seb, Tender  |
|           16 |     1952 | 2024-10-03 | Legacy             | L   | 0.429      | -            | -                | -                | -         |    -1.68 | Cyrix, DJF, Sandman, Seb, Tender  |
|           15 |     1958 | 2024-10-03 | Legacy             | L   | 0.429      | -            | -                | -                | -         |    -1.70 | Cyrix, DJF, Sandman, Seb, Tender  |
|           14 |     2029 | 2024-10-01 | Bad News Capybaras | W   | 0.416      | 0.477        | 0.002 (0.000)    | 0.289 (0.057)    | 0 (0.000) |     7.70 | Cyrix, DJF, Sandman, Seb, Tender  |
|           13 |     2034 | 2024-10-01 | Bad News Capybaras | L   | 0.415      | -            | -                | -                | -         |    -5.49 | Cyrix, DJF, Sandman, Seb, Tender  |
|           12 |     2259 | 2024-09-25 | BOSS               | L   | 0.376      | -            | -                | -                | -         |    -1.45 | Andrew, Cyrix, DJF, Sandman, Seb  |
|           11 |     2263 | 2024-09-25 | BOSS               | W   | 0.375      | 0.477        | 0.040 (0.007)    | 0.586 (0.105)    | 0 (0.000) |    10.49 | Andrew, Cyrix, DJF, Sandman, Seb  |
|           10 |     2393 | 2024-09-22 | jahsdnmasjdm       | L   | 0.355      | -            | -                | -                | -         |    -8.55 | Andrew, Cyrix, DJF, Sandman, Seb  |
|            9 |     2469 | 2024-09-19 | Chill Guys         | L   | 0.335      | -            | -                | -                | -         |    -5.94 | Andrew, Cyrix, DJF, Sandman, Seb  |
|            8 |     2587 | 2024-09-15 | Aether             | W   | 0.308      | 0.371        | 0.000 (0.000)    | 0.060 (0.007)    | 0 (0.000) |     2.03 | Andrew, Cyrix, DJF, Sandman, Seb  |
|            7 |     2793 | 2024-09-08 | Nouns              | L   | 0.261      | -            | -                | -                | -         |    -0.91 | Cyrix, DJF, Sandman, Seb, Wolffe  |
|            6 |     2809 | 2024-09-07 | LAG                | W   | 0.256      | 0.333        | 0.004 (0.000)    | 0.119 (0.010)    | 1 (0.256) |     3.95 | Cyrix, DJF, Sandman, Seb, Wolffe  |
|            5 |     2826 | 2024-09-07 | Kraken             | W   | 0.254      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.254) |     1.14 | Cyrix, DJF, Sandman, Seb, Wolffe  |
|            4 |     2915 | 2024-09-04 | Chill Guys         | W   | 0.236      | 0.477        | 0.004 (0.000)    | 0.170 (0.019)    | 0 (0.000) |     3.45 | Cyrix, DJF, Sandman, Seb, Wolffe  |
|            3 |     2922 | 2024-09-04 | Chill Guys         | L   | 0.235      | -            | -                | -                | -         |    -4.04 | Cyrix, DJF, Sandman, Seb, Wolffe  |
|            2 |     3228 | 2024-08-26 | Akimbo             | L   | 0.176      | -            | -                | -                | -         |    -2.88 | Cyrix, DJF, Sandman, Seb, Wolffe  |
|            1 |     3243 | 2024-08-26 | Getting Info       | L   | 0.174      | -            | -                | -                | -         |    -1.46 | Cyrix, DJF, Sandman, Seb, Wolffe  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($913.06)
- Divide that value by the 5th highest value among all rosters ($204,341.08)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.542 | $1,200.00      | $650.48         |
| 2024-09-08 |      0.263 | $1,000.00      | $262.58         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
