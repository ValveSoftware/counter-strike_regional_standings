### Roster Details<br />
Team Name: 8Sins<br />
Roster: Dutchy, moz, Prime, wfn, Wolfie<br />
Global Rank: [118](../../standings_global_2025_02_24.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_24.md)<br />
Regional Rank: [83]( ../../standings_europe_2025_02_24.md)<br />
<br />
Final Rank Value:  739.0<br />
<br />
Final Rank Value (739.0) = Starting Rank Value (746.0) + Head To Head Adjustments (-7.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.299[<sup>1</sup>](#table2)
- Bounty Collected: 0.246[<sup>2</sup>](#table1)
- Opponent Network: 0.021[<sup>2</sup>](#table1)
- LAN Wins: 0.160[<sup>2</sup>](#table1)

The average of these factors is 0.182<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 746.0
- 400 + ( ( 0.182 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 746.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |       19 | 2025-02-23 | ALASKA        | L   | 1.000      | -            | -                | -                | -         |   -10.81 | Dutchy, moz, Prime, wfn, Wolfie  |
|            4 |       33 | 2025-02-22 | ALASKA        | W   | 1.000      | 0.303        | 0.029 (0.009)    | 0.684 (0.208)    | 1 (1.000) |    20.76 | Dutchy, moz, Prime, wfn, Wolfie  |
|            3 |     1316 | 2024-11-20 | Belfast Storm | L   | 0.560      | -            | -                | -                | -         |   -11.50 | coldpera, f0cus, moz, Prime, wfn |
|            2 |     1857 | 2024-10-27 | VFE           | L   | 0.397      | -            | -                | -                | -         |    -8.09 | f0cus, Menace, moz, Prime, wfn   |
|            1 |     1863 | 2024-10-26 | Dripmen       | W   | 0.393      | 0.315        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.393) |     2.64 | f0cus, Menace, moz, Prime, wfn   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,699.20)
- Divide that value by the 5th highest value among all rosters ($371,464.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      1.000 | $1,326.00      | $1,326.00       |
| 2024-10-27 |      0.398 | $937.00        | $373.20         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
