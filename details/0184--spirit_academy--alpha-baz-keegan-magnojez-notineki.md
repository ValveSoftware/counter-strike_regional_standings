### Roster Details<br />
Team Name: Spirit Academy<br />
Roster: alpha, baz, keegaN, Magnojez, notineki<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [184](../standings_global.md)<br />
Regional Rank: [117]( ../standings_europe.md)<br />
Final Rank Value:  581.0<br />
<br />
Final Rank Value (581.0) = Starting Rank Value (550.4) + Head To Head Adjustments (30.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.265[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.070<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 550.4
- 400 + ( ( 0.070 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 550.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     3010 | 2024-03-09 | RUBY            | L   | 0.334      | -            | -                | -                | -         |    -0.89 | alpha, baz, keegaN, Magnojez, notineki    |
|            9 |     3042 | 2024-03-08 | Passion UA      | W   | 0.327      | 0.372        | 0.087 (0.011)    | 0.847 (0.103)    | 0 (0.000) |     9.56 | alpha, baz, keegaN, Magnojez, notineki    |
|            8 |     3237 | 2024-02-29 | Aurora          | L   | 0.273      | -            | -                | -                | -         |    -0.02 | alpha, baz, keegaN, Magnojez, notineki    |
|            7 |     3247 | 2024-02-28 | 9 Pandas        | L   | 0.268      | -            | -                | -                | -         |    -0.38 | alpha, baz, keegaN, Magnojez, notineki    |
|            6 |     3249 | 2024-02-28 | HAVU            | W   | 0.267      | 0.143        | 0.002 (0.000)    | 0.202 (0.008)    | 0 (0.000) |     6.32 | alpha, baz, keegaN, Magnojez, notineki    |
|            5 |     3267 | 2024-02-27 | RUBY            | W   | 0.261      | 0.143        | 0.144 (0.005)    | 0.580 (0.022)    | 0 (0.000) |     7.61 | alpha, baz, keegaN, Magnojez, notineki    |
|            4 |     3274 | 2024-02-27 | brazylijski luz | W   | 0.260      | 0.143        | 0.012 (0.000)    | 0.282 (0.010)    | 0 (0.000) |     6.84 | alpha, baz, keegaN, Magnojez, notineki    |
|            3 |     3824 | 2024-02-01 | Sangal          | L   | 0.086      | -            | -                | -                | -         |    -0.08 | alpha, baz, keegaN, Magnojez, notineki    |
|            2 |     3887 | 2024-01-28 | Alliance        | W   | 0.058      | 0.371        | 0.021 (0.000)    | 0.349 (0.008)    | 0 (0.000) |     1.63 | alpha, baz, keegaN, Magnojez, notineki    |
|            1 |     3949 | 2024-01-24 | Sangal          | L   | 0.033      | -            | -                | -                | -         |    -0.03 | alpha, keegaN, Magnojez, notineki, S0tF1k |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
