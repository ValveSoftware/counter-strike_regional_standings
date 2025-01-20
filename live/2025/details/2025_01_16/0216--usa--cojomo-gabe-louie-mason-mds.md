### Roster Details<br />
Team Name: USA<br />
Roster: CoJoMo, Gabe, Louie, mason, mds<br />
Global Rank: [216](../../standings_global_2025_01_16.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_16.md)<br />
Regional Rank: [70]( ../../standings_americas_2025_01_16.md)<br />
<br />
Final Rank Value:  465.1<br />
<br />
Final Rank Value (465.1) = Starting Rank Value (488.5) + Head To Head Adjustments (-23.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.178[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.045<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 488.5
- 400 + ( ( 0.045 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 488.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |      802 | 2024-11-15 | Nexus             | L   | 0.785      | -            | -                | -                | -         |    -0.24 | CoJoMo, Gabe, Louie, mason, mds           |
|           17 |      806 | 2024-11-15 | kONO              | L   | 0.784      | -            | -                | -                | -         |    -1.86 | CoJoMo, Gabe, Louie, mason, mds           |
|           16 |      842 | 2024-11-14 | QPT               | L   | 0.779      | -            | -                | -                | -         |    -0.41 | CoJoMo, Gabe, Louie, mason, mds           |
|           15 |      847 | 2024-11-14 | Tunisia           | L   | 0.778      | -            | -                | -                | -         |    -4.84 | CoJoMo, Gabe, Louie, mason, mds           |
|           14 |      850 | 2024-11-14 | Latvia            | L   | 0.778      | -            | -                | -                | -         |    -5.41 | CoJoMo, Gabe, Louie, mason, mds           |
|           13 |     1371 | 2024-10-19 | Fisher College    | L   | 0.608      | -            | -                | -                | -         |    -1.84 | CoJoMo, Gabe, mds, Outback, REKMEISTER    |
|           12 |     2206 | 2024-09-22 | Lore              | L   | 0.426      | -            | -                | -                | -         |    -8.24 | CoJoMo, Gabe, mds, shutout, YuZ           |
|           11 |     2251 | 2024-09-20 | Tsunami           | L   | 0.413      | -            | -                | -                | -         |    -4.40 | CoJoMo, Gabe, mds, shutout, YuZ           |
|           10 |     2378 | 2024-09-16 | undefined         | L   | 0.387      | -            | -                | -                | -         |    -3.08 | CoJoMo, CooperTrooper, Gabe, mds, shutout |
|            9 |     2465 | 2024-09-13 | What’s for dinner | W   | 0.368      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.32 | CoJoMo, CooperTrooper, Gabe, mds, shutout |
|            8 |     3041 | 2024-08-26 | FLUFFY AIMERS     | L   | 0.248      | -            | -                | -                | -         |    -0.65 | CoJoMo, Gabe, Louie, mds, shutout         |
|            7 |     3056 | 2024-08-26 | Party Astronauts  | L   | 0.246      | -            | -                | -                | -         |    -0.67 | CoJoMo, Gabe, Louie, mds, shutout         |
|            6 |     3422 | 2024-08-15 | Party Astronauts  | L   | 0.174      | -            | -                | -                | -         |    -0.49 | CoJoMo, Gabe, Louie, mds, shutout         |
|            5 |     3567 | 2024-08-11 | Revenge Nation    | W   | 0.148      | 0.371        | 0.004 (0.000)    | 0.146 (0.008)    | 0 (0.000) |     3.53 | CoJoMo, Gabe, Louie, mds, shutout         |
|            4 |     3640 | 2024-08-08 | undefined         | L   | 0.128      | -            | -                | -                | -         |    -1.04 | CoJoMo, CooperTrooper, Gabe, mds, shutout |
|            3 |     3818 | 2024-08-03 | DETONATE          | W   | 0.094      | 0.371        | 0.000 (0.000)    | 0.033 (0.001)    | 0 (0.000) |     1.47 | CoJoMo, CooperTrooper, Gabe, mds, shutout |
|            2 |     4182 | 2024-07-24 | Aether            | W   | 0.027      | 0.371        | 0.000 (0.000)    | 0.063 (0.001)    | 0 (0.000) |     0.42 | CoJoMo, Gabe, mds, nooz, shutout          |
|            1 |     4300 | 2024-07-20 | timbermen         | L   | 0.000      | -            | -                | -                | -         |     0.00 | CoJoMo, Gabe, mds, nooz, shutout          |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($227,813.60)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
