### Roster Details<br />
Team Name: Younglings<br />
Roster: 7ckingsam, arun, eLa1z, Shed0Z<br />
Global Rank: [343](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [202]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  464.1<br />
<br />
Final Rank Value (464.1) = Starting Rank Value (448.6) + Head To Head Adjustments (15.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.097[<sup>2</sup>](#table1)

The average of these factors is 0.025<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 448.6
- 400 + ( ( 0.025 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 448.6


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
|            5 |       79 | 2026-04-03 | WW              | L   | 1.000      | -            | -                | -                | -         |    -0.45 | 7ckingsam, arun, eLa1z, hurtfrisk, Shed0Z |
|            4 |       93 | 2026-04-03 | ARCRED          | L   | 1.000      | -            | -                | -                | -         |    -0.34 | 7ckingsam, arun, eLa1z, hurtfrisk, Shed0Z |
|            3 |     1667 | 2026-03-03 | SPARTA          | L   | 0.976      | -            | -                | -                | -         |    -0.27 | 7ckingsam, arun, eLa1z, SBolt, Shed0Z     |
|            2 |     1674 | 2026-03-03 | 5Actors         | W   | 0.975      | 0.333        | 0.000 (0.000)    | 0.061 (0.020)    | 1 (0.975) |    16.80 | 7ckingsam, arun, eLa1z, SBolt, Shed0Z     |
|            1 |     1710 | 2026-03-03 | Nuclear TigeRES | L   | 0.972      | -            | -                | -                | -         |    -0.26 | 7ckingsam, arun, eLa1z, SBolt, Shed0Z     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
