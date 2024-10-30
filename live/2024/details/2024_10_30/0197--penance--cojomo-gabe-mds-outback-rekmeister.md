### Roster Details<br />
Team Name: Penance<br />
Roster: CoJoMo, Gabe, mds, Outback, REKMEISTER<br />
Global Rank: [197](../../standings_global_2024_10_30.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_10_30.md)<br />
Regional Rank: [59]( ../../standings_americas_2024_10_30.md)<br />
<br />
Final Rank Value:  619.2<br />
<br />
Final Rank Value (619.2) = Starting Rank Value (669.6) + Head To Head Adjustments (-50.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.264[<sup>1</sup>](#table2)
- Bounty Collected: 0.259[<sup>2</sup>](#table1)
- Opponent Network: 0.020[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.136<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 669.6
- 400 + ( ( 0.136 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 669.6


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
|           36 |      186 | 2024-10-19 | Fisher Tsunami   | L   | 1.000      | -            | -                | -                | -         |    -4.86 | CoJoMo, Gabe, mds, Outback, REKMEISTER    |
|           35 |     1021 | 2024-09-22 | Lore             | L   | 0.948      | -            | -                | -                | -         |   -19.52 | CoJoMo, Gabe, mds, shutout, YuZ           |
|           34 |     1066 | 2024-09-20 | Final Form       | L   | 0.935      | -            | -                | -                | -         |   -14.17 | CoJoMo, Gabe, mds, shutout, YuZ           |
|           33 |     1193 | 2024-09-16 | undefined        | L   | 0.908      | -            | -                | -                | -         |    -9.71 | CoJoMo, CooperTrooper, Gabe, mds, shutout |
|           32 |     1280 | 2024-09-13 | Maximum Ego      | W   | 0.889      | 0.371        | 0.000 (0.000)    | -                | 0 (0.000) |     5.13 | CoJoMo, CooperTrooper, Gabe, mds, shutout |
|           31 |     1856 | 2024-08-26 | FLUFFY AIMERS    | L   | 0.769      | -            | -                | -                | -         |    -7.07 | CoJoMo, Gabe, Louie, mds, shutout         |
|           30 |     1871 | 2024-08-26 | Party Astronauts | L   | 0.767      | -            | -                | -                | -         |    -3.15 | CoJoMo, Gabe, Louie, mds, shutout         |
|           29 |     2237 | 2024-08-15 | Party Astronauts | L   | 0.696      | -            | -                | -                | -         |    -3.23 | CoJoMo, Gabe, Louie, mds, shutout         |
|           28 |     2382 | 2024-08-11 | Revenge Nation   | W   | 0.669      | 0.371        | 0.007 (0.002)    | 0.242 (0.060)    | 0 (0.000) |    13.54 | CoJoMo, Gabe, Louie, mds, shutout         |
|           27 |     2455 | 2024-08-08 | undefined        | L   | 0.649      | -            | -                | -                | -         |    -7.79 | CoJoMo, CooperTrooper, Gabe, mds, shutout |
|           26 |     2633 | 2024-08-03 | DETONATE         | W   | 0.616      | 0.371        | 0.000 (0.000)    | 0.104 (0.024)    | 0 (0.000) |     6.07 | CoJoMo, CooperTrooper, Gabe, mds, shutout |
|           25 |     2997 | 2024-07-24 | Aether           | W   | 0.548      | 0.371        | -                | 0.099 (0.020)    | 0 (0.000) |     5.17 | CoJoMo, Gabe, mds, nooz, shutout          |
|           24 |     3115 | 2024-07-20 | timbermen        | L   | 0.522      | -            | -                | -                | -         |    -1.80 | CoJoMo, Gabe, mds, nooz, shutout          |
|           23 |     3249 | 2024-07-17 | timbermen        | L   | 0.502      | -            | -                | -                | -         |    -1.72 | CoJoMo, Gabe, mds, shutout, xaler         |
|           22 |     3253 | 2024-07-17 | timbermen        | L   | 0.502      | -            | -                | -                | -         |    -1.75 | CoJoMo, Gabe, mds, shutout, xaler         |
|           21 |     3313 | 2024-07-16 | Take Flyte       | L   | 0.496      | -            | -                | -                | -         |    -4.55 | CoJoMo, Gabe, mds, shutout, xaler         |
|           20 |     3319 | 2024-07-16 | Take Flyte       | L   | 0.496      | -            | -                | -                | -         |    -4.72 | CoJoMo, Gabe, mds, shutout, xaler         |
|           19 |     3668 | 2024-06-14 | Akimbo           | L   | 0.281      | -            | -                | -                | -         |    -2.83 | CoJoMo, Gabe, mds, shutout, xaler         |
|           18 |     4121 | 2024-06-04 | Mythic           | L   | 0.214      | -            | -                | -                | -         |    -2.73 | CoJoMo, Gabe, Louie, mds, shutout         |
|           17 |     4422 | 2024-05-22 | BOSS             | L   | 0.129      | -            | -                | -                | -         |    -0.89 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           16 |     4425 | 2024-05-22 | BOSS             | W   | 0.129      | 0.477        | 0.060 (0.004)    | 0.380 (0.023)    | 0 (0.000) |     3.19 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           15 |     4470 | 2024-05-21 | NRG              | W   | 0.122      | 0.477        | 0.100 (0.006)    | 0.502 (0.029)    | 0 (0.000) |     3.28 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           14 |     4472 | 2024-05-21 | NRG              | L   | 0.122      | -            | -                | -                | -         |    -0.57 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           13 |     4505 | 2024-05-20 | FLUFFY AIMERS    | L   | 0.116      | -            | -                | -                | -         |    -1.03 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           12 |     4510 | 2024-05-20 | FLUFFY AIMERS    | W   | 0.115      | 0.477        | 0.028 (0.002)    | 0.503 (0.028)    | 0 (0.000) |     2.63 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           11 |     4672 | 2024-05-15 | Mythic           | L   | 0.082      | -            | -                | -                | -         |    -1.05 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|           10 |     4678 | 2024-05-15 | Mythic           | W   | 0.082      | 0.477        | 0.004 (0.000)    | 0.226 (0.009)    | 0 (0.000) |     1.56 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|            9 |     4740 | 2024-05-14 | timbermen        | L   | 0.075      | -            | -                | -                | -         |    -0.24 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|            8 |     4744 | 2024-05-14 | timbermen        | L   | 0.075      | -            | -                | -                | -         |    -0.24 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|            7 |     4796 | 2024-05-12 | NRG              | L   | 0.062      | -            | -                | -                | -         |    -0.29 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|            6 |     4803 | 2024-05-12 | Mythic           | W   | 0.061      | 0.270        | 0.004 (0.000)    | 0.226 (0.004)    | 0 (0.000) |     1.16 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|            5 |     4824 | 2024-05-11 | BOSS             | W   | 0.055      | 0.270        | 0.060 (0.001)    | 0.380 (0.006)    | 0 (0.000) |     1.37 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|            4 |     4828 | 2024-05-11 | NRG              | L   | 0.054      | -            | -                | -                | -         |    -0.25 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|            3 |     4832 | 2024-05-11 | Party Astronauts | W   | 0.054      | 0.270        | 0.007 (0.000)    | 0.012 (0.000)    | -         |     0.88 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|            2 |     4892 | 2024-05-08 | Nouns            | L   | 0.036      | -            | -                | -                | -         |    -0.08 | BeaKie, CoJoMo, Gabe, mds, shutout        |
|            1 |     4894 | 2024-05-08 | Nouns            | L   | 0.035      | -            | -                | -                | -         |    -0.08 | BeaKie, CoJoMo, Gabe, mds, shutout        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($398.78)
- Divide that value by the 5th highest value among all rosters ($242,848.56)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
