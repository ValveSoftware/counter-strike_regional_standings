### Roster Details<br />
Team Name: PeeP<br />
Roster: aNsavage, Brilliance, la3euka, yiksrezo, YumsaN<br />
Global Rank: [269](../../standings_global_2025_02_24.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_24.md)<br />
Regional Rank: [155]( ../../standings_europe_2025_02_24.md)<br />
<br />
Final Rank Value:  491.1<br />
<br />
Final Rank Value (491.1) = Starting Rank Value (491.8) + Head To Head Adjustments (-0.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.192[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.048<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 491.8
- 400 + ( ( 0.048 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 491.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2758 | 2024-09-25 | CPH Wolves       | L   | 0.184      | -            | -                | -                | -         |    -1.54 | aNsavage, Brilliance, la3euka, yiksrezo, YumsaN |
|            4 |     2813 | 2024-09-24 | Spirit Academy   | L   | 0.176      | -            | -                | -                | -         |    -0.51 | aNsavage, Brilliance, la3euka, yiksrezo, YumsaN |
|            3 |     3253 | 2024-09-09 | Passion UA       | L   | 0.079      | -            | -                | -                | -         |    -0.14 | bogemt, Brilliance, GREATEST, la3euka, YumsaN   |
|            2 |     3304 | 2024-09-07 | UNiTY            | W   | 0.065      | 0.372        | 0.026 (0.001)    | 0.261 (0.006)    | 0 (0.000) |     1.73 | bogemt, Brilliance, GREATEST, la3euka, YumsaN   |
|            1 |     3435 | 2024-09-03 | FLuffy Gangsters | L   | 0.039      | -            | -                | -                | -         |    -0.32 | bogemt, Brilliance, GREATEST, la3euka, YumsaN   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($371,464.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
