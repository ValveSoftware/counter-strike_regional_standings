### Roster Details<br />
Team Name: ADEPTS<br />
Roster: cHeuuuuk, Chucky, HippoV, SBT, Tarkky<br />
Global Rank: [254](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [144]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  493.3<br />
<br />
Final Rank Value (493.3) = Starting Rank Value (491.2) + Head To Head Adjustments (2.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.196[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.049<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 491.2
- 400 + ( ( 0.049 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 491.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1735 | 2024-12-22 | WOPA     | L   | 0.493      | -            | -                | -                | -         |    -3.18 | cHeuuuuk, Chucky, HippoV, SBT, Tarkky   |
|            4 |     1751 | 2024-12-21 | kONO     | L   | 0.486      | -            | -                | -                | -         |    -3.96 | cHeuuuuk, Chucky, SBT, Tarkky, xReal    |
|            3 |     1773 | 2024-12-19 | Preasy   | W   | 0.473      | 0.333        | 0.005 (0.001)    | 0.139 (0.022)    | 0 (0.000) |    10.38 | cHeuuuuk, Chucky, HippoV, SBT, Tarkky   |
|            2 |     3020 | 2024-10-19 | Viperio  | L   | 0.066      | -            | -                | -                | -         |    -0.72 | cHeuuuuk, Chucky, Oxbrandd, SBT, Tarkky |
|            1 |     3051 | 2024-10-18 | Chimera  | L   | 0.058      | -            | -                | -                | -         |    -0.34 | cHeuuuuk, Chucky, Oxbrandd, prn, Tarkky |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
