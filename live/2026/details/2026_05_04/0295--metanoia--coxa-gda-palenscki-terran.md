### Roster Details<br />
Team Name: METANOIA<br />
Roster: coxa, GdA, palenscki, terran<br />
Global Rank: [295](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_05_04.md)<br />
Regional Rank: [75]( ../../standings_americas_2026_05_04.md)<br />
<br />
Final Rank Value:  562.6<br />
<br />
Final Rank Value (562.6) = Starting Rank Value (551.2) + Head To Head Adjustments (11.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.263[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.052[<sup>2</sup>](#table1)

The average of these factors is 0.081<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 551.2
- 400 + ( ( 0.081 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 551.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2726 | 2026-03-04 | ShindeN     | L   | 0.794      | -            | -                | -                | -         |    -0.55 | coxa, GdA, Kaiserzy, palenscki, terran |
|            4 |     2732 | 2026-03-04 | Imperial    | L   | 0.794      | -            | -                | -                | -         |    -0.51 | coxa, GdA, Kaiserzy, palenscki, terran |
|            3 |     4373 | 2026-01-23 | Sharks      | L   | 0.527      | -            | -                | -                | -         |    -0.37 | coxa, GdA, palenscki, spy1337, terran  |
|            2 |     4443 | 2026-01-21 | GameHunters | L   | 0.515      | -            | -                | -                | -         |    -3.08 | coxa, GdA, palenscki, spy1337, terran  |
|            1 |     4452 | 2026-01-21 | Sharks      | W   | 0.514      | 0.384        | 0.080 (0.016)    | 0.548 (0.108)    | 1 (0.514) |    15.88 | coxa, GdA, palenscki, spy1337, terran  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
