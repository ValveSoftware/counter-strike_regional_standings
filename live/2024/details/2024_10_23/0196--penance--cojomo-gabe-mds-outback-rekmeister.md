### Roster Details<br />
Team Name: Penance<br />
Roster: CoJoMo, Gabe, mds, Outback, REKMEISTER<br />
Global Rank: [196](../../standings_global_2024_10_23.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_10_23.md)<br />
Regional Rank: [58]( ../../standings_americas_2024_10_23.md)<br />
<br />
Final Rank Value:  621.1<br />
<br />
Final Rank Value (621.1) = Starting Rank Value (674.0) + Head To Head Adjustments (-52.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.266[<sup>1</sup>](#table2)
- Bounty Collected: 0.266[<sup>2</sup>](#table1)
- Opponent Network: 0.027[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.140<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 674.0
- 400 + ( ( 0.140 - 0.000 ) / ( 0.816 - 0.000 ) ) * 1600 = 674.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           36 |       56 | 2024-10-19 | Fisher Tsunami   | L   | 1.000      | -            | -                | -                | -         |    -5.21 | CoJoMo, Gabe, mds, Outback, REKMEISTER    |
|           35 |      891 | 2024-09-22 | Lore             | L   | 0.994      | -            | -                | -                | -         |   -20.58 | CoJoMo, Gabe, mds, shutout, YuZ           |
|           34 |      936 | 2024-09-20 | Final Form       | L   | 0.981      | -            | -                | -                | -         |   -15.08 | CoJoMo, Gabe, mds, shutout, YuZ           |
|           33 |     1063 | 2024-09-16 | undefined        | L   | 0.954      | -            | -                | -                | -         |   -10.35 | CoJoMo, CooperTrooper, Gabe, mds, shutout |
|           32 |     1150 | 2024-09-13 | Maximum Ego      | W   | 0.935      | 0.371        | 0.000 (0.000)    | -                | 0 (0.000) |     5.27 | CoJoMo, CooperTrooper, Gabe, mds, shutout |
|           31 |     1726 | 2024-08-26 | FLUFFY AIMERS    | L   | 0.815      | -            | -                | -                | -         |    -7.86 | CoJoMo, Gabe, Louie, mds, shutout         |
|           30 |     1741 | 2024-08-26 | Party Astronauts | L   | 0.814      | -            | -                | -                | -         |    -3.36 | CoJoMo, Gabe, Louie, mds, shutout         |
|           29 |     2107 | 2024-08-15 | Party Astronauts | L   | 0.742      | -            | -                | -                | -         |    -3.48 | CoJoMo, Gabe, Louie, mds, shutout         |
|           28 |     2252 | 2024-08-11 | Revenge Nation   | W   | 0.715      | 0.371        | 0.006 (0.002)    | 0.252 (0.067)    | 0 (0.000) |    14.22 | CoJoMo, Gabe, Louie, mds, shutout         |
|           27 |     2325 | 2024-08-08 | undefined        | L   | 0.695      | -            | -                | -                | -         |    -8.53 | CoJoMo, CooperTrooper, Gabe, mds, shutout |
|           26 |     2503 | 2024-08-03 | DETONATE         | W   | 0.662      | 0.371        | 0.000 (0.000)    | 0.113 (0.028)    | 0 (0.000) |     6.39 | CoJoMo, CooperTrooper, Gabe, mds, shutout |
|           25 |     2867 | 2024-07-24 | Aether           | W   | 0.594      | 0.371        | -                | 0.104 (0.023)    | 0 (0.000) |     5.46 | CoJoMo, Gabe, mds, nooz, shutout          |
|           24 |     2985 | 2024-07-20 | timbermen        | L   | 0.568      | -            | -                | -                | -         |    -2.01 | CoJoMo, Gabe, mds, nooz, shutout          |
|           23 |     3119 | 2024-07-17 | timbermen        | L   | 0.548      | -            | -                | -                | -         |    -1.92 | CoJoMo, Gabe, mds, shutout, xaler         |
|           22 |     3123 | 2024-07-17 | timbermen        | L   | 0.548      | -            | -                | -                | -         |    -1.95 | CoJoMo, Gabe, mds, shutout, xaler         |
|           21 |     3183 | 2024-07-16 | Take Flyte       | L   | 0.542      | -            | -                | -                | -         |    -5.16 | CoJoMo, Gabe, mds, shutout, xaler         |
|           20 |     3189 | 2024-07-16 | Take Flyte       | L   | 0.542      | -            | -                | -                | -         |    -5.38 | CoJoMo, Gabe, mds, shutout, xaler         |
|           19 |     3538 | 2024-06-14 | Akimbo           | L   | 0.327      | -            | -                | -                | -         |    -3.41 | CoJoMo, Gabe, mds, shutout, xaler         |
|           18 |     3991 | 2024-06-04 | Mythic           | L   | 0.260      | -            | -                | -                | -         |    -3.35 | CoJoMo, Gabe, Louie, mds, shutout         |
|           17 |     4292 | 2024-05-22 | BOSS             | L   | 0.175      | -            | -                | -                | -         |    -1.32 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           16 |     4295 | 2024-05-22 | BOSS             | W   | 0.175      | 0.477        | 0.055 (0.005)    | 0.402 (0.034)    | 0 (0.000) |     4.23 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           15 |     4340 | 2024-05-21 | NRG              | W   | 0.168      | 0.477        | 0.093 (0.007)    | 0.533 (0.043)    | 0 (0.000) |     4.48 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           14 |     4342 | 2024-05-21 | NRG              | L   | 0.168      | -            | -                | -                | -         |    -0.83 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           13 |     4375 | 2024-05-20 | FLUFFY AIMERS    | L   | 0.162      | -            | -                | -                | -         |    -1.54 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           12 |     4380 | 2024-05-20 | FLUFFY AIMERS    | W   | 0.161      | 0.477        | 0.025 (0.002)    | 0.531 (0.041)    | 0 (0.000) |     3.58 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           11 |     4542 | 2024-05-15 | Mythic           | L   | 0.128      | -            | -                | -                | -         |    -1.65 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           10 |     4548 | 2024-05-15 | Mythic           | W   | 0.128      | 0.477        | 0.004 (0.000)    | 0.247 (0.015)    | 0 (0.000) |     2.42 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|            9 |     4610 | 2024-05-14 | timbermen        | L   | 0.121      | -            | -                | -                | -         |    -0.40 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|            8 |     4614 | 2024-05-14 | timbermen        | L   | 0.121      | -            | -                | -                | -         |    -0.40 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|            7 |     4666 | 2024-05-12 | NRG              | L   | 0.108      | -            | -                | -                | -         |    -0.54 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|            6 |     4673 | 2024-05-12 | Mythic           | W   | 0.107      | 0.270        | 0.004 (0.000)    | 0.247 (0.007)    | 0 (0.000) |     2.03 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|            5 |     4694 | 2024-05-11 | BOSS             | W   | 0.101      | 0.270        | 0.055 (0.001)    | 0.402 (0.011)    | 0 (0.000) |     2.49 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|            4 |     4698 | 2024-05-11 | NRG              | L   | 0.100      | -            | -                | -                | -         |    -0.49 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|            3 |     4702 | 2024-05-11 | Party Astronauts | W   | 0.100      | 0.270        | 0.008 (0.000)    | 0.023 (0.001)    | -         |     1.69 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|            2 |     4762 | 2024-05-08 | Nouns            | L   | 0.082      | -            | -                | -                | -         |    -0.19 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|            1 |     4764 | 2024-05-08 | Nouns            | L   | 0.081      | -            | -                | -                | -         |    -0.19 | BeaKie, CoJoMo, Gabe, mds, shutout        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($472.42)
- Divide that value by the 5th highest value among all rosters ($270,964.47)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
