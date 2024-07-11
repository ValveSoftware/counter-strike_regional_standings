### Roster Details<br />
Team Name: Newhappy<br />
Roster: AhaNg, jiejie, rage, SPine, Tiger<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [189](../standings_global.md)<br />
Regional Rank: [22]( ../standings_asia.md)<br />
Final Rank Value:  538.8<br />
<br />
Final Rank Value (538.8) = Starting Rank Value (522.9) + Head To Head Adjustments (15.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.232[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.058<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 522.9
- 400 + ( ( 0.058 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 522.9


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
|           14 |     3343 | 2024-02-17 | Lynn Vision        | W   | 0.232      | 0.143        | 0.127 (0.004)    | 0.221 (0.007)    | 0 (0.000) |     7.08 | AhaNg, jiejie, rage, SPine, Tiger |
|           13 |     3347 | 2024-02-17 | MAG                | W   | 0.231      | 0.143        | 0.000 (0.000)    | 0.034 (0.001)    | 0 (0.000) |     3.46 | AhaNg, jiejie, rage, SPine, Tiger |
|           12 |     3372 | 2024-02-16 | Lynn Vision        | L   | 0.226      | -            | -                | -                | -         |    -0.22 | AhaNg, jiejie, karl, rage, SPine  |
|           11 |     3378 | 2024-02-16 | GR                 | W   | 0.225      | 0.143        | 0.012 (0.000)    | 0.078 (0.003)    | 0 (0.000) |     5.17 | AhaNg, jiejie, karl, rage, SPine  |
|           10 |     3665 | 2024-02-01 | GR                 | L   | 0.125      | -            | -                | -                | -         |    -1.08 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            9 |     3669 | 2024-02-01 | TYLOO              | L   | 0.125      | -            | -                | -                | -         |    -1.02 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            8 |     3670 | 2024-02-01 | Steel Helmet       | W   | 0.124      | 0.143        | 0.009 (0.000)    | 0.007 (0.000)    | 0 (0.000) |     2.68 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            7 |     3774 | 2024-01-25 | Rare Atom          | L   | 0.078      | -            | -                | -                | -         |    -0.71 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            6 |     3787 | 2024-01-24 | Noobs But Diligent | W   | 0.072      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.76 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            5 |     3839 | 2024-01-22 | Eruption           | L   | 0.059      | -            | -                | -                | -         |    -1.24 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            4 |     3873 | 2024-01-21 | Rare Atom          | L   | 0.051      | -            | -                | -                | -         |    -0.47 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            3 |     3921 | 2024-01-20 | Steel Helmet       | W   | 0.044      | 0.143        | 0.009 (0.000)    | 0.007 (0.000)    | 0 (0.000) |     0.95 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            2 |     3974 | 2024-01-19 | TYLOO              | L   | 0.037      | -            | -                | -                | -         |    -0.32 | 2x2x, AhaNg, SPine, Tiger, tutu   |
|            1 |     3983 | 2024-01-18 | Rare Atom          | W   | 0.037      | 0.143        | 0.007 (0.000)    | 0.030 (0.000)    | 0 (0.000) |     0.82 | 2x2x, AhaNg, SPine, Tiger, tutu   |

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
