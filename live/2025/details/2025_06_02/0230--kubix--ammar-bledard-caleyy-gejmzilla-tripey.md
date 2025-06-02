### Roster Details<br />
Team Name: Kubix<br />
Roster: ammar, BledarD, Caleyy, gejmzilla, tripey<br />
Global Rank: [230](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [122]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  547.0<br />
<br />
Final Rank Value (547.0) = Starting Rank Value (514.1) + Head To Head Adjustments (32.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.234[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.062<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 514.1
- 400 + ( ( 0.062 - 0.000 ) / ( 0.872 - 0.000 ) ) * 1600 = 514.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      580 | 2025-05-02 | GUN5     | L   | 0.998      | -            | -                | -                | -         |    -2.83 | ammar, BledarD, Caleyy, gejmzilla, tripey |
|            5 |      676 | 2025-04-28 | ECLOT    | L   | 0.971      | -            | -                | -                | -         |    -2.75 | ammar, BledarD, Caleyy, gejmzilla, tripey |
|            4 |      748 | 2025-04-25 | fnatic   | L   | 0.951      | -            | -                | -                | -         |    -1.33 | ammar, BledarD, Caleyy, gejmzilla, tripey |
|            3 |      787 | 2025-04-22 | 9INE     | W   | 0.932      | 0.143        | 0.025 (0.003)    | 0.961 (0.128)    | 0 (0.000) |    27.64 | ammar, BledarD, Caleyy, gejmzilla, tripey |
|            2 |     1936 | 2025-03-15 | AMKAL    | L   | 0.678      | -            | -                | -                | -         |    -6.04 | ammar, Caleyy, gejmzilla, tripey, v1w     |
|            1 |     1946 | 2025-03-15 | Betera   | W   | 0.677      | 0.143        | 0.019 (0.002)    | 0.240 (0.023)    | 0 (0.000) |    18.24 | ammar, Caleyy, gejmzilla, tripey, v1w     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($444,744.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
