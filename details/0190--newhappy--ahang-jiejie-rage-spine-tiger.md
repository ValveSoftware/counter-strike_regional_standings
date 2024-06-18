### Roster Details<br />
Team Name: Newhappy<br />
Roster: AhaNg, jiejie, rage, SPine, Tiger<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [190](../standings_global.md)<br />
Regional Rank: [22]( ../standings_asia.md)<br />
Final Rank Value:  554.5<br />
<br />
Final Rank Value (554.5) = Starting Rank Value (526.3) + Head To Head Adjustments (28.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.246[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.062<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 526.3
- 400 + ( ( 0.062 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 526.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     3210 | 2024-02-17 | Lynn Vision        | W   | 0.388      | 0.143        | 0.126 (0.007)    | 0.258 (0.014)    | 0 (0.000) |    11.86 | AhaNg, jiejie, rage, SPine, Tiger |
|           13 |     3214 | 2024-02-17 | MAG                | W   | 0.387      | 0.143        | 0.000 (0.000)    | 0.074 (0.004)    | 0 (0.000) |     5.94 | AhaNg, jiejie, rage, SPine, Tiger |
|           12 |     3239 | 2024-02-16 | Lynn Vision        | L   | 0.381      | -            | -                | -                | -         |    -0.34 | AhaNg, jiejie, karl, rage, SPine  |
|           11 |     3245 | 2024-02-16 | GR                 | W   | 0.381      | 0.143        | 0.011 (0.001)    | 0.119 (0.006)    | 0 (0.000) |     8.45 | AhaNg, jiejie, karl, rage, SPine  |
|           10 |     3532 | 2024-02-01 | GR                 | L   | 0.281      | -            | -                | -                | -         |    -2.72 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            9 |     3536 | 2024-02-01 | TYLOO              | L   | 0.280      | -            | -                | -                | -         |    -1.87 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            8 |     3537 | 2024-02-01 | Steel Helmet       | W   | 0.280      | 0.143        | 0.010 (0.000)    | 0.033 (0.001)    | 0 (0.000) |     5.99 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            7 |     3641 | 2024-01-25 | Rare Atom          | L   | 0.234      | -            | -                | -                | -         |    -2.18 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            6 |     3654 | 2024-01-24 | Noobs But Diligent | W   | 0.228      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.36 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            5 |     3706 | 2024-01-22 | Eruption           | L   | 0.215      | -            | -                | -                | -         |    -4.53 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            4 |     3740 | 2024-01-21 | Rare Atom          | L   | 0.207      | -            | -                | -                | -         |    -1.95 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            3 |     3788 | 2024-01-20 | Steel Helmet       | W   | 0.200      | 0.143        | 0.010 (0.000)    | 0.033 (0.001)    | 0 (0.000) |     4.30 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            2 |     3841 | 2024-01-19 | TYLOO              | L   | 0.193      | -            | -                | -                | -         |    -1.40 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            1 |     3850 | 2024-01-18 | Rare Atom          | W   | 0.192      | 0.143        | 0.009 (0.000)    | 0.071 (0.002)    | 0 (0.000) |     4.30 | 2x2x, AhaNg, SPine, Tiger, tutu   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
