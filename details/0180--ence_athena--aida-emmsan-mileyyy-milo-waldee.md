### Roster Details<br />
Team Name: ENCE Athena<br />
Roster: Aida, Emmsan, Mileyyy, miLo, Waldee<br />
Global Rank: [180](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [115]( ../standings_europe.md)<br />
<br />
Final Rank Value:  621.5<br />
<br />
Final Rank Value (621.5) = Starting Rank Value (642.9) + Head To Head Adjustments (-21.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.277[<sup>1</sup>](#table2)
- Bounty Collected: 0.192[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.118<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 642.9
- 400 + ( ( 0.118 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 642.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |     1151 | 2024-06-08 | Crescent fe       | L   | 0.845      | -            | -                | -                | -         |   -12.09 | Aida, Emmsan, Mileyyy, miLo, Waldee |
|           11 |     2370 | 2024-04-27 | NIP Impact        | L   | 0.565      | -            | -                | -                | -         |    -6.78 | Aida, Emmsan, miLo, Waldee, xia     |
|           10 |     2555 | 2024-04-19 | Astralis W        | W   | 0.513      | 0.331        | 0.001 (0.000)    | 0.022 (0.004)    | 0 (0.000) |     7.56 | Aida, Emmsan, miLo, Waldee, xia     |
|            9 |     2935 | 2024-04-07 | dream catchers fe | L   | 0.433      | -            | -                | -                | -         |    -5.38 | Aida, Emmsan, miLo, Waldee, xia     |
|            8 |     2959 | 2024-04-06 | Imperial fe       | L   | 0.425      | -            | -                | -                | -         |    -1.24 | Aida, Emmsan, miLo, Waldee, xia     |
|            7 |     3008 | 2024-04-04 | BIG EQUIPA        | L   | 0.413      | -            | -                | -                | -         |    -4.22 | Aida, Emmsan, miLo, Waldee, xia     |
|            6 |     3179 | 2024-03-27 | Imperial fe       | L   | 0.360      | -            | -                | -                | -         |    -1.09 | Aida, Emmsan, miLo, Waldee, xia     |
|            5 |     3296 | 2024-03-20 | NIP Impact        | L   | 0.313      | -            | -                | -                | -         |    -4.19 | Aida, Emmsan, miLo, Waldee, xia     |
|            4 |     3448 | 2024-03-13 | ex-GUILD fe       | W   | 0.266      | 0.331        | 0.003 (0.000)    | 0.067 (0.006)    | 0 (0.000) |     4.40 | Aida, Emmsan, miLo, Waldee, xia     |
|            3 |     3846 | 2024-02-25 | NAVI Javelins     | L   | 0.151      | -            | -                | -                | -         |    -1.27 | Aida, Emmsan, miLo, Waldee, xia     |
|            2 |     3876 | 2024-02-24 | Spirit fe         | W   | 0.145      | 0.238        | 0.005 (0.000)    | 0.101 (0.004)    | 0 (0.000) |     2.41 | Aida, Emmsan, miLo, Waldee, xia     |
|            1 |     4118 | 2024-02-14 | more whiskey      | W   | 0.080      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.52 | Aida, Emmsan, miLo, Waldee, xia     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($806.12)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-08 |      0.847 | $100.00        | $84.65          |
| 2024-04-27 |      0.565 | $107.00        | $60.49          |
| 2024-04-21 |      0.526 | $1,050.00      | $552.68         |
| 2024-04-07 |      0.433 | $250.00        | $108.30         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
