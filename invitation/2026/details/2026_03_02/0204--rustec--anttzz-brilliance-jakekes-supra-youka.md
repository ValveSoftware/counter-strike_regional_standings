### Roster Details<br />
Team Name: RUSTEC<br />
Roster: anttzz, Brilliance, jakekeS, supra, youka<br />
Global Rank: [204](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_02.md)<br />
Regional Rank: [136]( ../../standings_europe_2026_03_02.md)<br />
<br />
Final Rank Value:  687.1<br />
<br />
Final Rank Value (687.1) = Starting Rank Value (641.3) + Head To Head Adjustments (45.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.288[<sup>2</sup>](#table1)
- Opponent Network: 0.019[<sup>2</sup>](#table1)
- LAN Wins: 0.203[<sup>2</sup>](#table1)

The average of these factors is 0.128<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 641.3
- 400 + ( ( 0.128 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 641.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1104 | 2026-02-02 | WHITEBIRD  | L   | 1.000      | -            | -                | -                | -         |    -2.00 | anttzz, Brilliance, jakekeS, supra, youka |
|            4 |     1114 | 2026-02-02 | K27        | L   | 1.000      | -            | -                | -                | -         |    -0.65 | anttzz, Brilliance, jakekeS, supra, youka |
|            3 |     1153 | 2026-01-31 | WW         | W   | 1.000      | 0.333        | 0.012 (0.004)    | 0.541 (0.180)    | 1 (1.000) |    26.14 | anttzz, Brilliance, jakekeS, supra, youka |
|            2 |     1167 | 2026-01-31 | ARCRED     | L   | 1.000      | -            | -                | -                | -         |    -3.08 | anttzz, Brilliance, jakekeS, supra, youka |
|            1 |     1182 | 2026-01-31 | Virtus.pro | W   | 0.998      | 0.333        | 0.090 (0.030)    | 0.043 (0.014)    | 1 (0.998) |    25.35 | anttzz, Brilliance, jakekeS, supra, youka |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
