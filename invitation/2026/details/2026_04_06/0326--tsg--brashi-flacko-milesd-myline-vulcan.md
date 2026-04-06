### Roster Details<br />
Team Name: TSG<br />
Roster: Brashi, flacko, milesd, myline, VulcaN<br />
Global Rank: [326](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_04_06.md)<br />
Regional Rank: [93]( ../../standings_americas_2026_04_06.md)<br />
<br />
Final Rank Value:  501.4<br />
<br />
Final Rank Value (501.4) = Starting Rank Value (497.5) + Head To Head Adjustments (3.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.198[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.050<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 497.5
- 400 + ( ( 0.050 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 497.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |     5154 | 2025-10-27 | Mythic        | L   | 0.130      | -            | -                | -                | -         |    -1.29 | Brashi, flacko, milesd, myline, VulcaN  |
|            8 |     5197 | 2025-10-26 | regain        | W   | 0.123      | 0.363        | 0.003 (0.000)    | 0.237 (0.011)    | 0 (0.000) |     2.82 | den1ed, flacko, milesd, myline, VulcaN  |
|            7 |     5259 | 2025-10-25 | Chicken Coop  | W   | 0.116      | 0.363        | 0.017 (0.001)    | 0.186 (0.008)    | 0 (0.000) |     2.89 | Brashi, flacko, milesd, myline, VulcaN  |
|            6 |     5267 | 2025-10-25 | Rave          | L   | 0.115      | -            | -                | -                | -         |    -0.58 | flacko, Freaky, milesd, myline, VulcaN  |
|            5 |     5306 | 2025-10-24 | Voca          | L   | 0.110      | -            | -                | -                | -         |    -0.95 | den1ed, flacko, milesd, myline, VulcaN  |
|            4 |     5373 | 2025-10-23 | Arrival Seven | W   | 0.103      | 0.363        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.19 | Brashi, flacko, milesd, myline, VulcaN  |
|            3 |     5607 | 2025-10-14 | regain        | L   | 0.043      | -            | -                | -                | -         |    -0.36 | Brashi, den1ed, flacko, milesd, VulcaN  |
|            2 |     5735 | 2025-10-09 | OverKnight    | W   | 0.009      | 0.363        | 0.000 (0.000)    | 0.075 (0.000)    | 0 (0.000) |     0.15 | Brashi, den1ed, flacko, milesd, VulcaN  |
|            1 |     5775 | 2025-10-08 | NuTorious     | W   | 0.003      | 0.363        | 0.000 (0.000)    | 0.067 (0.000)    | 0 (0.000) |     0.06 | Brashi, den1ed, flacko, HorizoN, milesd |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
