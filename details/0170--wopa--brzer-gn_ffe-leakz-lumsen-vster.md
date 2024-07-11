### Roster Details<br />
Team Name: WOPA<br />
Roster: brzer, Gnøffe, leakz, LUMSEN, Vster<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [170](../standings_global.md)<br />
Regional Rank: [107]( ../standings_europe.md)<br />
Final Rank Value:  656.8<br />
<br />
Final Rank Value (656.8) = Starting Rank Value (645.5) + Head To Head Adjustments (11.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.272[<sup>1</sup>](#table2)
- Bounty Collected: 0.188[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.116<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 645.5
- 400 + ( ( 0.116 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 645.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |      157 | 2024-06-16 | FLuffy Gangsters | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.160 (0.023)    | 0 (0.000) |    14.16 | brzer, Gnøffe, leakz, LUMSEN, Vster  |
|           10 |      284 | 2024-06-12 | The Prodigies    | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.116 (0.017)    | 0 (0.000) |    14.44 | brzer, Gnøffe, leakz, LUMSEN, Vster  |
|            9 |      296 | 2024-06-12 | CPH Wolves       | L   | 1.000      | -            | -                | -                | -         |   -11.71 | brzer, Gnøffe, leakz, LUMSEN, Vster  |
|            8 |      305 | 2024-06-11 | ADEPTS           | W   | 1.000      | 0.143        | 0.003 (0.000)    | 0.034 (0.005)    | 0 (0.000) |    18.43 | brzer, Gnøffe, leakz, LUMSEN, Vster  |
|            7 |      769 | 2024-06-01 | Illuminar        | L   | 0.931      | -            | -                | -                | -         |   -12.99 | brzer, Gnøffe, leakz, LUMSEN, Vster  |
|            6 |     1163 | 2024-05-17 | LEON             | L   | 0.833      | -            | -                | -                | -         |   -10.16 | brzer, Gnøffe, leakz, LUMSEN, Vster  |
|            5 |     1313 | 2024-05-14 | Secret           | W   | 0.812      | 0.143        | 0.000 (0.000)    | 0.092 (0.011)    | 0 (0.000) |    10.63 | brzer, Gnøffe, leakz, LUMSEN, Vster  |
|            4 |     1328 | 2024-05-13 | VP.Prodigy       | L   | 0.807      | -            | -                | -                | -         |    -4.52 | brzer, Gnøffe, leakz, LUMSEN, Vster  |
|            3 |     2528 | 2024-03-25 | Sashi            | L   | 0.480      | -            | -                | -                | -         |    -6.27 | brzer, Gnøffe, leakz, LUMSEN, Pellyy |
|            2 |     3970 | 2024-01-19 | MOUZ NXT         | L   | 0.038      | -            | -                | -                | -         |    -0.08 | brzer, buNNy, Gnøffe, leakz, LUMSEN  |
|            1 |     4031 | 2024-01-18 | Monte Gen        | L   | 0.032      | -            | -                | -                | -         |    -0.58 | brzer, buNNy, Gnøffe, leakz, LUMSEN  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($539.46)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-12 |      1.000 | $360.00        | $360.00         |
| 2024-03-25 |      0.481 | $373.00        | $179.46         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
