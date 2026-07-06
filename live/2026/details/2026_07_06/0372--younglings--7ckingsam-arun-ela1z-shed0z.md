### Roster Details<br />
Team Name: Younglings<br />
Roster: 7ckingsam, arun, eLa1z, Shed0Z<br />
Global Rank: [372](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [231]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  422.0<br />
<br />
Final Rank Value (422.0) = Starting Rank Value (418.3) + Head To Head Adjustments (3.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.038[<sup>2</sup>](#table1)

The average of these factors is 0.010<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 418.3
- 400 + ( ( 0.010 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 418.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2609 | 2026-04-03 | WW              | L   | 0.575      | -            | -                | -                | -         |    -1.82 | 7ckingsam, arun, eLa1z, hurtfrisk, Shed0Z |
|            4 |     2637 | 2026-04-03 | ARCRED          | L   | 0.574      | -            | -                | -                | -         |    -0.35 | 7ckingsam, arun, eLa1z, hurtfrisk, Shed0Z |
|            3 |     4410 | 2026-03-03 | SPARTA          | L   | 0.369      | -            | -                | -                | -         |    -0.27 | 7ckingsam, arun, eLa1z, SBolt, Shed0Z     |
|            2 |     4417 | 2026-03-03 | 5Actors         | W   | 0.368      | 0.333        | 0.000 (0.000)    | 0.036 (0.004)    | 1 (0.368) |     6.25 | 7ckingsam, arun, eLa1z, SBolt, Shed0Z     |
|            1 |     4453 | 2026-03-03 | Nuclear TigeRES | L   | 0.365      | -            | -                | -                | -         |    -0.13 | 7ckingsam, arun, eLa1z, SBolt, Shed0Z     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
