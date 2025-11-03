### Roster Details<br />
Team Name: Nemesis<br />
Roster: CRUC1AL, n0te, Nexius, tein, Thomas<br />
Global Rank: [91](../../standings_global_2025_11_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_11_03.md)<br />
Regional Rank: [61]( ../../standings_europe_2025_11_03.md)<br />
<br />
Final Rank Value:  901.5<br />
<br />
Final Rank Value (901.5) = Starting Rank Value (889.1) + Head To Head Adjustments (12.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.302[<sup>1</sup>](#table2)
- Bounty Collected: 0.214[<sup>2</sup>](#table1)
- Opponent Network: 0.026[<sup>2</sup>](#table1)
- LAN Wins: 0.501[<sup>2</sup>](#table1)

The average of these factors is 0.261<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 889.1
- 400 + ( ( 0.261 - 0.000 ) / ( 0.853 - 0.000 ) ) * 1600 = 889.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |        3 | 2025-11-02 | MINLATE         | W   | 1.000      | 0.309        | 0.002 (0.001)    | 0.081 (0.025)    | 1 (1.000) |     8.88 | CRUC1AL, n0te, Nexius, tein, Thomas |
|            7 |        7 | 2025-11-02 | Prestige        | W   | 1.000      | 0.309        | 0.001 (0.000)    | 0.040 (0.012)    | 1 (1.000) |     6.80 | CRUC1AL, n0te, Nexius, tein, Thomas |
|            6 |       12 | 2025-11-01 | Phantom         | W   | 1.000      | 0.309        | 0.001 (0.000)    | 0.197 (0.061)    | 1 (1.000) |    13.67 | CRUC1AL, n0te, Nexius, tein, Thomas |
|            5 |       20 | 2025-11-01 | Glitchtech      | W   | 1.000      | 0.309        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     3.45 | CRUC1AL, n0te, Nexius, tein, Thomas |
|            4 |       25 | 2025-11-01 | MINLATE         | L   | 1.000      | -            | -                | -                | -         |   -22.76 | CRUC1AL, n0te, Nexius, tein, Thomas |
|            3 |     1086 | 2025-09-26 | ESC             | L   | 0.948      | -            | -                | -                | -         |    -4.02 | bevve, CRUC1AL, Frip, tein, Thomas  |
|            2 |     1106 | 2025-09-26 | ex-Inner Circle | L   | 0.946      | -            | -                | -                | -         |   -10.14 | bevve, CRUC1AL, Frip, tein, Thomas  |
|            1 |     1119 | 2025-09-26 | Betclic         | W   | 0.945      | 0.354        | 0.002 (0.001)    | 0.483 (0.162)    | 1 (0.945) |    16.50 | bevve, CRUC1AL, Frip, tein, Thomas  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,026.00)
- Divide that value by the 5th highest value among all rosters ($619,318.60)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-02 |      1.000 | $3,026.00      | $3,026.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
