### Roster Details<br />
Team Name: WOPA<br />
Roster: Gnøffe, leakz, PR1mE, sL1m3, Vster<br />
Global Rank: [183](../../standings_global_2024_10_30.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_30.md)<br />
Regional Rank: [115]( ../../standings_europe_2024_10_30.md)<br />
<br />
Final Rank Value:  651.2<br />
<br />
Final Rank Value (651.2) = Starting Rank Value (645.5) + Head To Head Adjustments (5.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.227[<sup>1</sup>](#table2)
- Bounty Collected: 0.256[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.124<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 645.5
- 400 + ( ( 0.124 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 645.5


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
|           17 |      124 | 2024-10-24 | L&G              | L   | 1.000      | -            | -                | -                | -         |    -9.31 | Gnøffe, leakz, PR1mE, sL1m3, Vster  |
|           16 |      132 | 2024-10-23 | NAVI Junior      | L   | 1.000      | -            | -                | -                | -         |    -3.64 | Gnøffe, leakz, PR1mE, sL1m3, Vster  |
|           15 |      175 | 2024-10-20 | Verdant          | W   | 1.000      | 0.333        | 0.029 (0.010)    | 0.271 (0.090)    | 0 (0.000) |    22.46 | Gnøffe, leakz, PR1mE, sL1m3, Vster  |
|           14 |     2138 | 2024-08-20 | Grannys Knockers | L   | 0.725      | -            | -                | -                | -         |   -10.26 | Gnøffe, leakz, sL1m3, Vster, zEden  |
|           13 |     2173 | 2024-08-19 | ALTERNATE aTTaX  | L   | 0.718      | -            | -                | -                | -         |    -4.18 | Gnøffe, leakz, sL1m3, Vster, zEden  |
|           12 |     3096 | 2024-07-21 | Sampi            | L   | 0.527      | -            | -                | -                | -         |    -2.14 | Gnøffe, leakz, sL1m3, Topa, zEden   |
|           11 |     3182 | 2024-07-19 | VP.Prodigy       | W   | 0.512      | 0.435        | 0.010 (0.002)    | 0.065 (0.014)    | 0 (0.000) |    10.31 | Gnøffe, leakz, sL1m3, Topa, zEden   |
|           10 |     3309 | 2024-07-17 | GUN5             | L   | 0.498      | -            | -                | -                | -         |    -1.95 | Gnøffe, leakz, sL1m3, Vster, zEden  |
|            9 |     3408 | 2024-07-15 | Passion UA       | L   | 0.485      | -            | -                | -                | -         |    -1.22 | Gnøffe, leakz, sL1m3, Vster, zEden  |
|            8 |     3613 | 2024-06-16 | FLuffy Gangsters | W   | 0.293      | 0.143        | 0.005 (0.000)    | 0.287 (0.012)    | 0 (0.000) |     5.83 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            7 |     3740 | 2024-06-12 | The Prodigies    | W   | 0.268      | 0.143        | 0.009 (0.000)    | 0.022 (0.001)    | 0 (0.000) |     4.73 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            6 |     3752 | 2024-06-12 | CPH Wolves       | L   | 0.266      | -            | -                | -                | -         |    -2.33 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            5 |     3761 | 2024-06-11 | ADEPTS           | W   | 0.261      | 0.143        | 0.000 (0.000)    | 0.033 (0.001)    | 0 (0.000) |     3.52 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            4 |     4225 | 2024-06-01 | Illuminar        | L   | 0.191      | -            | -                | -                | -         |    -4.36 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            3 |     4619 | 2024-05-17 | LEON             | L   | 0.093      | -            | -                | -                | -         |    -1.49 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            2 |     4769 | 2024-05-14 | Secret           | W   | 0.072      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.46 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            1 |     4784 | 2024-05-13 | VP.Prodigy       | L   | 0.067      | -            | -                | -                | -         |    -0.77 | brzer, Gnøffe, leakz, LUMSEN, Vster |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($96.09)
- Divide that value by the 5th highest value among all rosters ($242,848.56)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
