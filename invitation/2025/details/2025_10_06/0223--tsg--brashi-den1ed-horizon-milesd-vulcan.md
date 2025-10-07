### Roster Details<br />
Team Name: TSG<br />
Roster: Brashi, den1ed, HorizoN, milesd, VulcaN<br />
Global Rank: [223](../../standings_global_2025_10_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_10_06.md)<br />
Regional Rank: [66]( ../../standings_americas_2025_10_06.md)<br />
<br />
Final Rank Value:  512.8<br />
<br />
Final Rank Value (512.8) = Starting Rank Value (500.0) + Head To Head Adjustments (12.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.194[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.051<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 500.0
- 400 + ( ( 0.051 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 500.0


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
|            6 |     1185 | 2025-08-24 | Chicken Coop  | L   | 0.916      | -            | -                | -                | -         |    -5.87 | Brashi, den1ed, flacko , milesd, VulcaN |
|            5 |     1199 | 2025-08-23 | FULL SEND     | W   | 0.910      | 0.333        | 0.000 (0.000)    | 0.242 (0.073)    | 0 (0.000) |    16.23 | Brashi, den1ed, HorizoN, milesd, VulcaN |
|            4 |     1229 | 2025-08-21 | LAG           | L   | 0.896      | -            | -                | -                | -         |    -4.82 | Brashi, den1ed, HorizoN, milesd, VulcaN |
|            3 |     1313 | 2025-08-17 | Arrival Seven | W   | 0.870      | 0.333        | 0.002 (0.001)    | 0.098 (0.029)    | 0 (0.000) |    18.24 | Brashi, den1ed, HorizoN, milesd, VulcaN |
|            2 |     1492 | 2025-08-13 | Wildcard      | L   | 0.842      | -            | -                | -                | -         |    -0.57 | Brashi, den1ed, HorizoN, milesd, VulcaN |
|            1 |     2213 | 2025-07-11 | anything else | L   | 0.621      | -            | -                | -                | -         |   -10.46 | Brashi, chante, den1ed, HorizoN, VulcaN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($380,085.28)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
