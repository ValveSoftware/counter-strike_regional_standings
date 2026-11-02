### Roster Details<br />
Team Name: Glitch<br />
Roster: Brillo, rud, shaiK, smekk, szejn<br />
Global Rank: [229](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [161]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  666.1<br />
<br />
Final Rank Value (666.1) = Starting Rank Value (620.8) + Head To Head Adjustments (45.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.255[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.199[<sup>2</sup>](#table1)

The average of these factors is 0.118<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 620.8
- 400 + ( ( 0.118 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 620.8


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
|            5 |     1154 | 2026-10-02 | BASEMENT BOYS | L   | 0.993      | -            | -                | -                | -         |    -2.83 | Brillo, rud, shaiK, smekk, szejn |
|            4 |     1161 | 2026-10-02 | Prestige      | W   | 0.993      | 0.371        | 0.000 (0.000)    | 0.102 (0.038)    | 1 (0.993) |    20.92 | Brillo, rud, shaiK, smekk, szejn |
|            3 |     1179 | 2026-10-02 | Sashi         | W   | 0.993      | 0.371        | 0.032 (0.012)    | 0.388 (0.143)    | 1 (0.993) |    29.14 | Brillo, rud, shaiK, smekk, szejn |
|            2 |     1197 | 2026-10-02 | Voca          | L   | 0.992      | -            | -                | -                | -         |    -1.48 | Brillo, rud, shaiK, smekk, szejn |
|            1 |     1212 | 2026-10-02 | BC.Game       | L   | 0.992      | -            | -                | -                | -         |    -0.43 | Brillo, rud, shaiK, smekk, szejn |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
