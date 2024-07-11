### Roster Details<br />
Team Name: Spirit Academy<br />
Roster: alpha, baz, keegaN, Magnojez, notineki<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [181](../standings_global.md)<br />
Regional Rank: [112]( ../standings_europe.md)<br />
Final Rank Value:  586.0<br />
<br />
Final Rank Value (586.0) = Starting Rank Value (550.9) + Head To Head Adjustments (35.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.269[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.072<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 550.9
- 400 + ( ( 0.072 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 550.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |     2846 | 2024-03-09 | RUBY              | L   | 0.374      | -            | -                | -                | -         |    -1.10 | alpha, baz, keegaN, Magnojez, notineki    |
|           11 |     2878 | 2024-03-08 | Passion UA        | W   | 0.367      | 0.372        | 0.087 (0.012)    | 0.821 (0.112)    | 0 (0.000) |    10.68 | alpha, baz, keegaN, Magnojez, notineki    |
|           10 |     3073 | 2024-02-29 | Aurora            | L   | 0.313      | -            | -                | -                | -         |    -0.02 | alpha, baz, keegaN, Magnojez, notineki    |
|            9 |     3083 | 2024-02-28 | 9 Pandas          | L   | 0.307      | -            | -                | -                | -         |    -0.42 | alpha, baz, keegaN, Magnojez, notineki    |
|            8 |     3085 | 2024-02-28 | HAVU              | W   | 0.307      | 0.143        | 0.002 (0.000)    | 0.211 (0.009)    | 0 (0.000) |     7.21 | alpha, baz, keegaN, Magnojez, notineki    |
|            7 |     3103 | 2024-02-27 | RUBY              | W   | 0.300      | 0.143        | 0.139 (0.006)    | 0.563 (0.024)    | 0 (0.000) |     8.69 | alpha, baz, keegaN, Magnojez, notineki    |
|            6 |     3110 | 2024-02-27 | brazylijski luz   | W   | 0.300      | 0.143        | 0.011 (0.000)    | 0.281 (0.012)    | 0 (0.000) |     7.70 | alpha, baz, keegaN, Magnojez, notineki    |
|            5 |     3660 | 2024-02-01 | Sangal            | L   | 0.126      | -            | -                | -                | -         |    -0.12 | alpha, baz, keegaN, Magnojez, notineki    |
|            4 |     3723 | 2024-01-28 | Alliance          | W   | 0.098      | 0.371        | 0.020 (0.001)    | 0.377 (0.014)    | 0 (0.000) |     2.73 | alpha, baz, keegaN, Magnojez, notineki    |
|            3 |     3785 | 2024-01-24 | Sangal            | L   | 0.073      | -            | -                | -                | -         |    -0.07 | alpha, keegaN, Magnojez, notineki, S0tF1k |
|            2 |     4030 | 2024-01-18 | Permitta          | L   | 0.032      | -            | -                | -                | -         |    -0.09 | alpha, baz, keegaN, Magnojez, notineki    |
|            1 |     4154 | 2024-01-15 | Aurora Young Blud | L   | 0.012      | -            | -                | -                | -         |    -0.09 | alpha, baz, keegaN, Magnojez, notineki    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
