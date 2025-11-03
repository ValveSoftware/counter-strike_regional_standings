### Roster Details<br />
Team Name: TSG<br />
Roster: Brashi, den1ed, HorizoN, VulcaN<br />
Global Rank: [241](../../standings_global_2025_11_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_11_03.md)<br />
Regional Rank: [76]( ../../standings_americas_2025_11_03.md)<br />
<br />
Final Rank Value:  501.7<br />
<br />
Final Rank Value (501.7) = Starting Rank Value (484.0) + Head To Head Adjustments (17.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.171[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.045<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 484.0
- 400 + ( ( 0.045 - 0.000 ) / ( 0.853 - 0.000 ) ) * 1600 = 484.0


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
|            5 |     2098 | 2025-08-23 | FULL SEND     | W   | 0.723      | 0.333        | 0.000 (0.000)    | 0.279 (0.067)    | 0 (0.000) |    15.94 | Brashi, den1ed, HorizoN, milesd, VulcaN |
|            4 |     2128 | 2025-08-21 | LAG           | L   | 0.709      | -            | -                | -                | -         |    -4.58 | Brashi, den1ed, HorizoN, milesd, VulcaN |
|            3 |     2212 | 2025-08-17 | Arrival Seven | W   | 0.683      | 0.333        | 0.000 (0.000)    | 0.066 (0.015)    | 0 (0.000) |    13.77 | Brashi, den1ed, HorizoN, milesd, VulcaN |
|            2 |     2391 | 2025-08-13 | Wildcard      | L   | 0.655      | -            | -                | -                | -         |    -0.85 | Brashi, den1ed, HorizoN, milesd, VulcaN |
|            1 |     3114 | 2025-07-11 | anything else | L   | 0.434      | -            | -                | -                | -         |    -6.63 | Brashi, chante, den1ed, HorizoN, VulcaN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($619,318.60)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
