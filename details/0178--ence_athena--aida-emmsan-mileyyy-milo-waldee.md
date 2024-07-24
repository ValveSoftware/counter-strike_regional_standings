### Roster Details<br />
Team Name: ENCE Athena<br />
Roster: Aida, Emmsan, Mileyyy, miLo, Waldee<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [178](../standings_global.md)<br />
Regional Rank: [112]( ../standings_europe.md)<br />
Final Rank Value:  623.4<br />
<br />
Final Rank Value (623.4) = Starting Rank Value (645.2) + Head To Head Adjustments (-21.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.286[<sup>1</sup>](#table2)
- Bounty Collected: 0.197[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.121<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 645.2
- 400 + ( ( 0.121 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 645.2


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
|           12 |      909 | 2024-06-08 | Crescent fe       | L   | 0.893      | -            | -                | -                | -         |   -12.68 | Aida, Emmsan, Mileyyy, miLo, Waldee |
|           11 |     2128 | 2024-04-27 | NIP Impact        | L   | 0.612      | -            | -                | -                | -         |    -7.17 | Aida, Emmsan, miLo, Waldee, xia     |
|           10 |     2313 | 2024-04-19 | Astralis W        | W   | 0.560      | 0.331        | 0.002 (0.000)    | 0.027 (0.005)    | 0 (0.000) |     8.26 | Aida, Emmsan, miLo, Waldee, xia     |
|            9 |     2693 | 2024-04-07 | dream catchers fe | L   | 0.480      | -            | -                | -                | -         |    -6.03 | Aida, Emmsan, miLo, Waldee, xia     |
|            8 |     2717 | 2024-04-06 | Imperial fe       | L   | 0.472      | -            | -                | -                | -         |    -1.21 | Aida, Emmsan, miLo, Waldee, xia     |
|            7 |     2766 | 2024-04-04 | BIG EQUIPA        | L   | 0.460      | -            | -                | -                | -         |    -4.55 | Aida, Emmsan, miLo, Waldee, xia     |
|            6 |     2937 | 2024-03-27 | Imperial fe       | L   | 0.407      | -            | -                | -                | -         |    -1.08 | Aida, Emmsan, miLo, Waldee, xia     |
|            5 |     3054 | 2024-03-20 | NIP Impact        | L   | 0.361      | -            | -                | -                | -         |    -4.78 | Aida, Emmsan, miLo, Waldee, xia     |
|            4 |     3206 | 2024-03-13 | ex-GUILD fe       | W   | 0.314      | 0.331        | 0.003 (0.000)    | 0.081 (0.008)    | 0 (0.000) |     5.20 | Aida, Emmsan, miLo, Waldee, xia     |
|            3 |     3604 | 2024-02-25 | NAVI Javelins     | L   | 0.199      | -            | -                | -                | -         |    -1.60 | Aida, Emmsan, miLo, Waldee, xia     |
|            2 |     3634 | 2024-02-24 | Spirit fe         | W   | 0.192      | 0.238        | 0.004 (0.000)    | 0.073 (0.003)    | 0 (0.000) |     3.08 | Aida, Emmsan, miLo, Waldee, xia     |
|            1 |     3876 | 2024-02-14 | more whiskey      | W   | 0.128      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.81 | Aida, Emmsan, miLo, Waldee, xia     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($877.38)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-08 |      0.894 | $100.00        | $89.38          |
| 2024-04-27 |      0.613 | $107.00        | $65.55          |
| 2024-04-21 |      0.574 | $1,050.00      | $602.33         |
| 2024-04-07 |      0.480 | $250.00        | $120.12         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
