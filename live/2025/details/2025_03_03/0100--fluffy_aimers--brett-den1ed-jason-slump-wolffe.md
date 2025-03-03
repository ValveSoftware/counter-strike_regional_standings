### Roster Details<br />
Team Name: FLUFFY AIMERS<br />
Roster: brett, den1ed, jason, slump, Wolffe<br />
Global Rank: [100](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_03.md)<br />
Regional Rank: [23]( ../../standings_americas_2025_03_03.md)<br />
<br />
Final Rank Value:  778.3<br />
<br />
Final Rank Value (778.3) = Starting Rank Value (788.2) + Head To Head Adjustments (-9.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.301[<sup>1</sup>](#table2)
- Bounty Collected: 0.251[<sup>2</sup>](#table1)
- Opponent Network: 0.033[<sup>2</sup>](#table1)
- LAN Wins: 0.221[<sup>2</sup>](#table1)

The average of these factors is 0.201<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 788.2
- 400 + ( ( 0.201 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 788.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |      899 | 2024-12-14 | Party Astronauts   | L   | 0.676      | -            | -                | -                | -         |   -10.44 | brett, den1ed, jason, slump, Wolffe  |
|           25 |     1001 | 2024-12-08 | BLUEJAYS           | L   | 0.634      | -            | -                | -                | -         |    -3.31 | brett, jason, nooz, slump, Wolffe    |
|           24 |     1015 | 2024-12-07 | Party Astronauts   | W   | 0.630      | 0.384        | 0.007 (0.002)    | 0.458 (0.111)    | 1 (0.630) |    10.22 | brett, jason, nooz, slump, Wolffe    |
|           23 |     1022 | 2024-12-07 | Bad News Capybaras | W   | 0.629      | 0.384        | 0.000 (0.000)    | 0.142 (0.034)    | 1 (0.629) |     6.46 | brett, jason, nooz, slump, Wolffe    |
|           22 |     1036 | 2024-12-07 | What’s for dinner  | W   | 0.627      | -            | -                | -                | 1 (0.627) |     2.12 | brett, jason, nooz, slump, Wolffe    |
|           21 |     1049 | 2024-12-06 | ROOMBA PEEK        | L   | 0.623      | -            | -                | -                | -         |   -15.65 | brett, jason, nooz, slump, Wolffe    |
|           20 |     2180 | 2024-10-15 | BLUEJAYS           | L   | 0.276      | -            | -                | -                | -         |    -1.17 | ayy, brett, jason, nooz, slump       |
|           19 |     2202 | 2024-10-13 | Fisher College     | L   | 0.262      | -            | -                | -                | -         |    -4.80 | brett, jason, nooz, slump, Wolffe    |
|           18 |     2203 | 2024-10-13 | InControl          | W   | 0.261      | 0.262        | -                | 0.072 (0.005)    | 0 (0.000) |     2.19 | brett, jason, nooz, slump, Wolffe    |
|           17 |     2217 | 2024-10-12 | Final Form         | W   | 0.255      | -            | -                | -                | 0 (0.000) |     1.40 | brett, jason, nooz, slump, Wolffe    |
|           16 |     2267 | 2024-10-09 | Chill Guys         | L   | 0.236      | -            | -                | -                | -         |    -5.26 | ayy, brett, jason, nooz, slump       |
|           15 |     2272 | 2024-10-09 | Chill Guys         | L   | 0.236      | -            | -                | -                | -         |    -5.35 | ayy, brett, jason, nooz, slump       |
|           14 |     2304 | 2024-10-08 | timbermen          | L   | 0.229      | -            | -                | -                | -         |    -5.17 | ayy, brett, jason, nooz, slump       |
|           13 |     2309 | 2024-10-08 | timbermen          | W   | 0.229      | 0.477        | 0.003 (0.000)    | 0.058 (0.006)    | 0 (0.000) |     2.07 | ayy, brett, jason, nooz, slump       |
|           12 |     2350 | 2024-10-07 | BLUEJAYS           | L   | 0.223      | -            | -                | -                | -         |    -1.00 | ayy, brett, jason, nooz, slump       |
|           11 |     2352 | 2024-10-07 | BLUEJAYS           | W   | 0.222      | 0.477        | 0.030 (0.003)    | 0.640 (0.068)    | 0 (0.000) |     6.05 | ayy, brett, jason, nooz, slump       |
|           10 |     2411 | 2024-10-05 | BLUEJAYS           | L   | 0.210      | -            | -                | -                | -         |    -0.90 | brett, jason, nooz, slump, Wolffe    |
|            9 |     2413 | 2024-10-05 | Legacy             | W   | 0.209      | 0.371        | 0.036 (0.003)    | 0.687 (0.053)    | 0 (0.000) |     4.04 | brett, consti, jason, slump, Wolffe  |
|            8 |     2448 | 2024-10-04 | timbermen          | W   | 0.202      | 0.371        | 0.003 (0.000)    | -                | 0 (0.000) |     1.91 | brett, jason, nooz, slump, Wolffe    |
|            7 |     2562 | 2024-10-01 | Chill Guys         | W   | 0.183      | 0.371        | 0.001 (0.000)    | 0.169 (0.011)    | 0 (0.000) |     1.64 | ayy, brett, jason, nooz, slump       |
|            6 |     2903 | 2024-09-23 | LAG                | W   | 0.129      | 0.477        | 0.004 (0.000)    | 0.145 (0.009)    | -         |     1.88 | ayy, brett, jason, nooz, slump       |
|            5 |     2906 | 2024-09-23 | LAG                | W   | 0.129      | 0.477        | 0.004 (0.000)    | 0.145 (0.009)    | -         |     1.89 | ayy, brett, jason, nooz, slump       |
|            4 |     2946 | 2024-09-22 | NRG                | L   | 0.121      | -            | -                | -                | -         |    -0.90 | brett, C4LLM3SU3, jason, nooz, slump |
|            3 |     2969 | 2024-09-21 | Legacy             | W   | 0.115      | 0.303        | 0.036 (0.001)    | 0.687 (0.024)    | -         |     2.12 | ayy, brett, jason, nooz, slump       |
|            2 |     3477 | 2024-09-04 | Bad News Capybaras | W   | 0.003      | -            | -                | -                | -         |     0.03 | ayy, brett, jason, nooz, slump       |
|            1 |     3481 | 2024-09-04 | Bad News Capybaras | W   | 0.002      | -            | -                | -                | -         |     0.02 | ayy, brett, jason, nooz, slump       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,573.97)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.309 | $2,000.00      | $617.88         |
| 2024-10-13 |      0.262 | $450.00        | $117.96         |
| 2024-10-05 |      0.210 | $4,000.00      | $838.13         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
