### Roster Details<br />
Team Name: WOPA<br />
Roster: Gnøffe, leakz, sL1m3, Vster, zEden<br />
Global Rank: [179](../../standings_global_2024_08_21.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_21.md)<br />
Regional Rank: [115]( ../../standings_europe_2024_08_21.md)<br />
<br />
Final Rank Value:  642.9<br />
<br />
Final Rank Value (642.9) = Starting Rank Value (654.5) + Head To Head Adjustments (-11.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.246[<sup>1</sup>](#table2)
- Bounty Collected: 0.250[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.128<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 654.5
- 400 + ( ( 0.128 - 0.000 ) / ( 0.806 - 0.000 ) ) * 1600 = 654.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |       84 | 2024-08-20 | Grannys Knockers | L   | 1.000      | -            | -                | -                | -         |   -11.87 | Gnøffe, leakz, sL1m3, Vster, zEden  |
|           13 |      119 | 2024-08-19 | ALTERNATE aTTaX  | L   | 1.000      | -            | -                | -                | -         |    -9.76 | Gnøffe, leakz, sL1m3, Vster, zEden  |
|           12 |     1042 | 2024-07-21 | Sampi            | L   | 0.993      | -            | -                | -                | -         |    -7.52 | Gnøffe, leakz, sL1m3, Topa, zEden   |
|           11 |     1128 | 2024-07-19 | VP.Prodigy       | W   | 0.977      | 0.435        | 0.023 (0.010)    | 0.302 (0.128)    | 0 (0.000) |    22.45 | Gnøffe, leakz, sL1m3, Topa, zEden   |
|           10 |     1255 | 2024-07-17 | GUN5             | L   | 0.964      | -            | -                | -                | -         |    -5.30 | Gnøffe, leakz, sL1m3, Vster, zEden  |
|            9 |     1354 | 2024-07-15 | Passion UA       | L   | 0.950      | -            | -                | -                | -         |    -3.41 | Gnøffe, leakz, sL1m3, Vster, zEden  |
|            8 |     1559 | 2024-06-16 | FLuffy Gangsters | W   | 0.759      | 0.143        | 0.000 (0.000)    | 0.261 (0.028)    | 0 (0.000) |    10.56 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            7 |     1686 | 2024-06-12 | The Prodigies    | W   | 0.733      | 0.143        | 0.000 (0.000)    | 0.074 (0.008)    | 0 (0.000) |     9.19 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            6 |     1698 | 2024-06-12 | CPH Wolves       | L   | 0.732      | -            | -                | -                | -         |    -7.54 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            5 |     1707 | 2024-06-11 | ADEPTS           | W   | 0.727      | 0.143        | 0.002 (0.000)    | 0.021 (0.002)    | 0 (0.000) |    11.71 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            4 |     2171 | 2024-06-01 | Illuminar        | L   | 0.657      | -            | -                | -                | -         |   -13.22 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            3 |     2565 | 2024-05-17 | LEON             | L   | 0.559      | -            | -                | -                | -         |    -8.27 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            2 |     2715 | 2024-05-14 | Secret           | W   | 0.538      | 0.143        | 0.000 (0.000)    | 0.037 (0.003)    | 0 (0.000) |     5.58 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            1 |     2730 | 2024-05-13 | VP.Prodigy       | L   | 0.533      | -            | -                | -                | -         |    -4.27 | brzer, Gnøffe, leakz, LUMSEN, Vster |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($263.77)
- Divide that value by the 5th highest value among all rosters ($307,820.64)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
