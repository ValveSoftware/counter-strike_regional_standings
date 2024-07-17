### Roster Details<br />
Team Name: Fraud5<br />
Roster: cryths, Rezst, shyyne, Tree60, yz0<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [162](../standings_global.md)<br />
Regional Rank: [106]( ../standings_europe.md)<br />
Final Rank Value:  694.1<br />
<br />
Final Rank Value (694.1) = Starting Rank Value (697.9) + Head To Head Adjustments (-3.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.315[<sup>1</sup>](#table2)
- Bounty Collected: 0.209[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.028[<sup>2</sup>](#table1)

The average of these factors is 0.139<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 697.9
- 400 + ( ( 0.139 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 697.9


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
|           11 |      493 | 2024-06-10 | EXO        | L   | 0.955      | -            | -                | -                | -         |   -10.43 | cryths, Rezst, shyyne, Tree60, yz0    |
|           10 |      783 | 2024-06-05 | RAPTORS EC | W   | 0.921      | 0.282        | 0.001 (0.000)    | 0.046 (0.012)    | 0 (0.000) |    11.67 | cryths, Rezst, shyyne, Tree60, yz0    |
|            9 |     2596 | 2024-03-29 | EXO        | L   | 0.468      | -            | -                | -                | -         |    -5.17 | Kisynergy, Rezst, shyyne, Tree60, yz0 |
|            8 |     2779 | 2024-03-19 | RAPTORS EC | W   | 0.401      | 0.143        | 0.000 (0.000)    | 0.015 (0.001)    | 0 (0.000) |     2.07 | Kisynergy, Rezst, shyyne, Tree60, yz0 |
|            7 |     3020 | 2024-03-09 | Insilio    | L   | 0.333      | -            | -                | -                | -         |    -2.01 | Rezst, shyyne, SLY, Tree60, yz0       |
|            6 |     3033 | 2024-03-09 | ex-Preasy  | L   | 0.332      | -            | -                | -                | -         |    -2.62 | Rezst, shyyne, SLY, Tree60, yz0       |
|            5 |     3043 | 2024-03-08 | MOUZ NXT   | L   | 0.327      | -            | -                | -                | -         |    -0.99 | Rezst, shyyne, SLY, Tree60, yz0       |
|            4 |     3105 | 2024-03-06 | Passion UA | L   | 0.312      | -            | -                | -                | -         |    -1.31 | Rezst, shyyne, SLY, Tree60, yz0       |
|            3 |     3157 | 2024-03-04 | Secret     | W   | 0.300      | 0.371        | 0.000 (0.000)    | 0.085 (0.009)    | 0 (0.000) |     3.06 | Rezst, shyyne, SLY, Tree60, yz0       |
|            2 |     3313 | 2024-02-25 | EXO        | L   | 0.247      | -            | -                | -                | -         |    -2.93 | Rezst, shyyne, SLY, Tree60, yz0       |
|            1 |     3341 | 2024-02-24 | EXO        | W   | 0.241      | 0.307        | 0.019 (0.001)    | 0.132 (0.010)    | 1 (0.241) |     4.78 | Rezst, shyyne, SLY, Tree60, yz0       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,651.17)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-10 |      0.955 | $954.00        | $910.60         |
| 2024-03-29 |      0.468 | $951.00        | $445.38         |
| 2024-02-25 |      0.247 | $1,197.00      | $295.19         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
