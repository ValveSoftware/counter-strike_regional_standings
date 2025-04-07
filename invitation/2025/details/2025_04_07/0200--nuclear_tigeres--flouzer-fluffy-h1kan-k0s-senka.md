### Roster Details<br />
Team Name: Nuclear TigeRES<br />
Roster: flouzer, fluffy, h1kaN, k0s, senka<br />
Global Rank: [200](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [122]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  607.0<br />
<br />
Final Rank Value (607.0) = Starting Rank Value (636.6) + Head To Head Adjustments (-29.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.310[<sup>1</sup>](#table2)
- Bounty Collected: 0.183[<sup>2</sup>](#table1)
- Opponent Network: 0.020[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.128<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 636.6
- 400 + ( ( 0.128 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 636.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |      335 | 2025-03-24 | Hesta         | L   | 1.000      | -            | -                | -                | -         |   -14.97 | flouzer, fluffy, h1kaN, k0s, senka |
|           12 |      341 | 2025-03-24 | Inner Circle  | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.098 (0.014)    | 0 (0.000) |    11.47 | flouzer, fluffy, h1kaN, k0s, senka |
|           11 |      374 | 2025-03-22 | Tricked       | L   | 1.000      | -            | -                | -                | -         |   -17.14 | flouzer, fluffy, h1kaN, k0s, senka |
|           10 |      488 | 2025-03-14 | Garden Garage | L   | 1.000      | -            | -                | -                | -         |   -13.08 | flouzer, fluffy, h1kaN, k0s, senka |
|            9 |      512 | 2025-03-12 | LEON          | W   | 1.000      | 0.372        | 0.001 (0.000)    | 0.161 (0.060)    | 0 (0.000) |    16.89 | flouzer, fluffy, h1kaN, k0s, senka |
|            8 |      670 | 2025-03-08 | RUBY          | L   | 1.000      | -            | -                | -                | -         |   -10.21 | flouzer, fluffy, h1kaN, k0s, senka |
|            7 |      796 | 2025-03-06 | Insilio       | W   | 0.987      | 0.372        | 0.000 (0.000)    | 0.339 (0.125)    | 0 (0.000) |    14.53 | flouzer, fluffy, h1kaN, k0s, senka |
|            6 |     1156 | 2025-02-16 | K27           | L   | 0.869      | -            | -                | -                | -         |   -11.86 | flouzer, fluffy, h1kaN, k0s, senka |
|            5 |     2066 | 2024-12-03 | GenOne        | L   | 0.368      | -            | -                | -                | -         |    -4.41 | flouzer, fluffy, h1kaN, k0s, senka |
|            4 |     2126 | 2024-11-30 | Leo           | L   | 0.348      | -            | -                | -                | -         |    -3.96 | flouzer, fluffy, h1kaN, k0s, senka |
|            3 |     2175 | 2024-11-28 | GameAgents    | W   | 0.335      | 0.372        | 0.000 (0.000)    | 0.019 (0.002)    | 0 (0.000) |     2.20 | flouzer, fluffy, h1kaN, k0s, senka |
|            2 |     2205 | 2024-11-26 | Soul's Heart  | W   | 0.321      | 0.372        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.13 | flouzer, fluffy, h1kaN, k0s, senka |
|            1 |     2769 | 2024-11-01 | RUSH B        | L   | 0.154      | -            | -                | -                | -         |    -1.19 | flouzer, fluffy, h1kaN, k0s, senka |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,646.12)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-22 |      1.000 | $750.00        | $750.00         |
| 2025-02-16 |      0.869 | $735.00        | $638.47         |
| 2024-11-03 |      0.168 | $1,533.00      | $257.65         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
