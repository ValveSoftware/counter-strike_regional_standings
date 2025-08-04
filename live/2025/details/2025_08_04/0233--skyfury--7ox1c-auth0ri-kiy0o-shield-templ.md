### Roster Details<br />
Team Name: SKYFURY<br />
Roster: 7oX1C, auth0ri, Kiy0o, shield, Templ<br />
Global Rank: [233](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [119]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  533.8<br />
<br />
Final Rank Value (533.8) = Starting Rank Value (531.5) + Head To Head Adjustments (2.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.261[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.069<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 531.5
- 400 + ( ( 0.069 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 531.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1824 | 2025-04-20 | NOVAQ      | L   | 0.492      | -            | -                | -                | -         |    -6.13 | 7oX1C, auth0ri, Kiy0o, shield, Templ  |
|            4 |     1874 | 2025-04-17 | FUT        | L   | 0.474      | -            | -                | -                | -         |    -0.70 | 7oX1C, auth0ri, Kiy0o, shield, Templ  |
|            3 |     1963 | 2025-04-14 | CYBERSHOKE | L   | 0.453      | -            | -                | -                | -         |    -1.64 | 7oX1C, auth0ri, Kiy0o, shield, Templ  |
|            2 |     1992 | 2025-04-12 | Nexus      | W   | 0.441      | 0.435        | 0.076 (0.015)    | 0.888 (0.170)    | 0 (0.000) |    12.44 | 7oX1C, auth0ri, Kiy0o, shield, Templ  |
|            1 |     2755 | 2025-03-22 | Betera     | L   | 0.300      | -            | -                | -                | -         |    -1.68 | 7oX1C, auth0ri, Br4tkO, shield, Templ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($440,967.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
