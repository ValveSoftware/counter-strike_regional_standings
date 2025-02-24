### Roster Details<br />
Team Name: RED Canids<br />
Roster: dav1deuS, hardzao, HEN1, nython, venomzera<br />
Global Rank: [161](../../standings_global_2025_02_24.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_02_24.md)<br />
Regional Rank: [40]( ../../standings_americas_2025_02_24.md)<br />
<br />
Final Rank Value:  668.5<br />
<br />
Final Rank Value (668.5) = Starting Rank Value (657.3) + Head To Head Adjustments (11.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.301[<sup>1</sup>](#table2)
- Bounty Collected: 0.232[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.135<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 657.3
- 400 + ( ( 0.135 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 657.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2785 | 2024-09-24 | ODDIK    | W   | 0.180      | 0.450        | 0.028 (0.002)    | 0.596 (0.048)    | 0 (0.000) |     3.91 | dav1deuS, hardzao, HEN1, nython, venomzera |
|            4 |     2791 | 2024-09-24 | ODDIK    | L   | 0.180      | -            | -                | -                | -         |    -1.79 | dav1deuS, hardzao, HEN1, nython, venomzera |
|            3 |     2796 | 2024-09-24 | Fluxo    | W   | 0.179      | 0.143        | 0.054 (0.001)    | 0.453 (0.012)    | 0 (0.000) |     4.61 | dav1deuS, gtw, HEN1, nython, venomzera     |
|            2 |     2827 | 2024-09-23 | paiN     | L   | 0.173      | -            | -                | -                | -         |    -0.03 | dav1deuS, gtw, HEN1, nython, venomzera     |
|            1 |     2838 | 2024-09-23 | Fluxo    | W   | 0.173      | 0.143        | 0.054 (0.001)    | 0.453 (0.011)    | 0 (0.000) |     4.46 | dav1deuS, gtw, HEN1, nython, venomzera     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,767.27)
- Divide that value by the 5th highest value among all rosters ($371,464.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.353 | $5,000.00      | $1,767.27       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
