### Roster Details<br />
Team Name: TSM Impact<br />
Roster: Bungee, di^, Juli, Lx, madss<br />
Global Rank: [153](../../standings_global_2024_10_30.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_10_30.md)<br />
Regional Rank: [40]( ../../standings_americas_2024_10_30.md)<br />
<br />
Final Rank Value:  720.2<br />
<br />
Final Rank Value (720.2) = Starting Rank Value (699.1) + Head To Head Adjustments (21.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.337[<sup>1</sup>](#table2)
- Bounty Collected: 0.252[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.151<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 699.1
- 400 + ( ( 0.151 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 699.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |      210 | 2024-10-18 | FLUFFY MAFIA     | W   | 1.000      | 0.333        | 0.008 (0.003)    | 0.159 (0.053)    | 0 (0.000) |    16.52 | Bungee, di^, Juli, Lx, madss     |
|            9 |      613 | 2024-10-02 | Shimmer          | L   | 1.000      | -            | -                | -                | -         |   -15.54 | Bungee, di^, Juli, Lx, madss     |
|            8 |      835 | 2024-09-26 | Aware fe         | L   | 0.976      | -            | -                | -                | -         |   -19.95 | Bungee, di^, Juli, Lx, madss     |
|            7 |     1131 | 2024-09-18 | Nouns fe         | W   | 0.922      | 0.333        | 0.007 (0.002)    | 0.096 (0.029)    | 0 (0.000) |    10.61 | Bungee, di^, Juli, Lx, madss     |
|            6 |     1341 | 2024-09-11 | Blue Otter Karma | W   | 0.876      | 0.333        | 0.005 (0.002)    | 0.061 (0.018)    | 0 (0.000) |    11.22 | empathy, Juli, Lx, madss, phoebe |
|            5 |     1545 | 2024-09-04 | FlyQuest RED     | L   | 0.829      | -            | -                | -                | -         |   -12.91 | empathy, Juli, Lx, madss, phoebe |
|            4 |     1692 | 2024-08-29 | Lotus fe         | W   | 0.789      | 0.333        | 0.005 (0.001)    | 0.030 (0.008)    | 0 (0.000) |     9.68 | empathy, Juli, Lx, madss, phoebe |
|            3 |     2177 | 2024-08-18 | Nouns fe         | W   | 0.715      | 0.250        | 0.007 (0.001)    | 0.096 (0.017)    | 0 (0.000) |     9.44 | empathy, Juli, Lx, madss, phoebe |
|            2 |     2871 | 2024-07-28 | Nouns fe         | W   | 0.575      | 0.250        | 0.007 (0.001)    | 0.096 (0.014)    | 0 (0.000) |     8.04 | empathy, Juli, Lx, madss, phoebe |
|            1 |     3600 | 2024-06-16 | Lotus fe         | W   | 0.296      | 0.250        | 0.005 (0.000)    | 0.030 (0.002)    | 0 (0.000) |     4.03 | abby, empathy, Juli, Lx, madss   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,639.75)
- Divide that value by the 5th highest value among all rosters ($242,848.56)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-18 |      1.000 | $1,450.00      | $1,450.00       |
| 2024-08-18 |      0.715 | $750.00        | $536.49         |
| 2024-07-28 |      0.575 | $750.00        | $431.61         |
| 2024-06-16 |      0.296 | $750.00        | $221.65         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
