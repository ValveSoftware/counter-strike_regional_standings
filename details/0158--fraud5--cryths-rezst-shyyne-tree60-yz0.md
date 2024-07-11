### Roster Details<br />
Team Name: Fraud5<br />
Roster: cryths, Rezst, shyyne, Tree60, yz0<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [158](../standings_global.md)<br />
Regional Rank: [102]( ../standings_europe.md)<br />
Final Rank Value:  693.7<br />
<br />
Final Rank Value (693.7) = Starting Rank Value (697.5) + Head To Head Adjustments (-3.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.316[<sup>1</sup>](#table2)
- Bounty Collected: 0.212[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.032[<sup>2</sup>](#table1)

The average of these factors is 0.141<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 697.5
- 400 + ( ( 0.141 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 697.5


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
|           11 |      329 | 2024-06-10 | EXO        | L   | 0.994      | -            | -                | -                | -         |   -10.73 | cryths, Rezst, shyyne, Tree60, yz0    |
|           10 |      619 | 2024-06-05 | RAPTORS EC | W   | 0.960      | 0.282        | 0.001 (0.000)    | 0.048 (0.013)    | 0 (0.000) |    12.20 | cryths, Rezst, shyyne, Tree60, yz0    |
|            9 |     2432 | 2024-03-29 | EXO        | L   | 0.508      | -            | -                | -                | -         |    -5.53 | Kisynergy, Rezst, shyyne, Tree60, yz0 |
|            8 |     2615 | 2024-03-19 | RAPTORS EC | W   | 0.441      | 0.143        | 0.000 (0.000)    | 0.017 (0.001)    | 0 (0.000) |     2.29 | Kisynergy, Rezst, shyyne, Tree60, yz0 |
|            7 |     2856 | 2024-03-09 | Insilio    | L   | 0.373      | -            | -                | -                | -         |    -2.31 | Rezst, shyyne, SLY, Tree60, yz0       |
|            6 |     2869 | 2024-03-09 | ex-Preasy  | L   | 0.371      | -            | -                | -                | -         |    -2.77 | Rezst, shyyne, SLY, Tree60, yz0       |
|            5 |     2879 | 2024-03-08 | MOUZ NXT   | L   | 0.366      | -            | -                | -                | -         |    -1.12 | Rezst, shyyne, SLY, Tree60, yz0       |
|            4 |     2941 | 2024-03-06 | Passion UA | L   | 0.352      | -            | -                | -                | -         |    -1.52 | Rezst, shyyne, SLY, Tree60, yz0       |
|            3 |     2993 | 2024-03-04 | Secret     | W   | 0.339      | 0.371        | 0.000 (0.000)    | 0.092 (0.012)    | 0 (0.000) |     3.50 | Rezst, shyyne, SLY, Tree60, yz0       |
|            2 |     3149 | 2024-02-25 | EXO        | L   | 0.286      | -            | -                | -                | -         |    -3.38 | Rezst, shyyne, SLY, Tree60, yz0       |
|            1 |     3177 | 2024-02-24 | EXO        | W   | 0.280      | 0.307        | 0.019 (0.002)    | 0.139 (0.012)    | 1 (0.280) |     5.59 | Rezst, shyyne, SLY, Tree60, yz0       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,774.04)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-10 |      0.994 | $954.00        | $948.38         |
| 2024-03-29 |      0.508 | $951.00        | $483.05         |
| 2024-02-25 |      0.286 | $1,197.00      | $342.60         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
