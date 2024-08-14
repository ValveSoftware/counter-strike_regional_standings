### Roster Details<br />
Team Name: GL Academy<br />
Roster: darber, Goody, leaf, rud, Tree60<br />
Global Rank: [155](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [99]( ../standings_europe.md)<br />
<br />
Final Rank Value:  700.2<br />
<br />
Final Rank Value (700.2) = Starting Rank Value (712.0) + Head To Head Adjustments (-11.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.306[<sup>1</sup>](#table2)
- Bounty Collected: 0.297[<sup>2</sup>](#table1)
- Opponent Network: 0.030[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.158<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 712.0
- 400 + ( ( 0.158 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 712.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      947 | 2024-07-18 | Astralis Talent | L   | 1.000      | -            | -                | -                | -         |   -16.18 | darber, Goody, leaf, rud, Tree60 |
|           11 |     1006 | 2024-07-17 | K10             | L   | 1.000      | -            | -                | -                | -         |   -17.13 | darber, Goody, leaf, rud, Tree60 |
|           10 |     1873 | 2024-06-03 | ex-PERA         | L   | 0.720      | -            | -                | -                | -         |    -5.63 | darber, Goody, leaf, rud, Tree60 |
|            9 |     2031 | 2024-05-28 | UNiTY           | W   | 0.680      | 0.379        | 0.032 (0.008)    | 0.350 (0.090)    | 0 (0.000) |    16.03 | darber, Goody, leaf, rud, Tree60 |
|            8 |     2124 | 2024-05-23 | brazylijski luz | L   | 0.646      | -            | -                | -                | -         |    -8.10 | darber, Goody, leaf, rud, Tree60 |
|            7 |     2687 | 2024-05-05 | MOUZ NXT        | L   | 0.524      | -            | -                | -                | -         |    -2.99 | darber, Goody, leaf, rud, shadiy |
|            6 |     2700 | 2024-05-04 | B8              | L   | 0.518      | -            | -                | -                | -         |    -2.81 | darber, Goody, leaf, rud, shadiy |
|            5 |     2770 | 2024-05-01 | RUBY            | W   | 0.497      | 0.435        | 0.089 (0.019)    | 0.453 (0.098)    | 0 (0.000) |    11.49 | darber, Goody, leaf, rud, shadiy |
|            4 |     2774 | 2024-04-30 | Sampi           | L   | 0.494      | -            | -                | -                | -         |    -4.52 | darber, Goody, leaf, rud, sSen   |
|            3 |     2859 | 2024-04-27 | K10             | W   | 0.471      | 0.143        | 0.007 (0.000)    | 0.123 (0.008)    | 0 (0.000) |     6.33 | darber, Goody, leaf, rud, sSen   |
|            2 |     3604 | 2024-03-30 | NAVI Junior     | W   | 0.285      | 0.333        | 0.003 (0.000)    | 0.102 (0.010)    | 0 (0.000) |     4.33 | darber, Goody, leaf, nestee, rud |
|            1 |     3632 | 2024-03-28 | Passion UA      | W   | 0.271      | 0.333        | 0.168 (0.015)    | 1.000 (0.090)    | 0 (0.000) |     7.41 | darber, Goody, leaf, nestee, rud |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,708.29)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
