### Roster Details<br />
Team Name: Betera<br />
Roster: alex666, El1an, lollipop21k, MaSvAl, nifee<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [144](../standings_global.md)<br />
Regional Rank: [93]( ../standings_europe.md)<br />
Final Rank Value:  730.0<br />
<br />
Final Rank Value (730.0) = Starting Rank Value (718.7) + Head To Head Adjustments (11.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.265[<sup>1</sup>](#table2)
- Bounty Collected: 0.322[<sup>2</sup>](#table1)
- Opponent Network: 0.040[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.157<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 718.7
- 400 + ( ( 0.157 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 718.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     1986 | 2024-04-10 | brazylijski luz | L   | 0.743      | -            | -                | -                | -         |    -8.99 | alex666, El1an, lollipop21k, MaSvAl, nifee |
|           14 |     2045 | 2024-04-09 | TSM             | L   | 0.736      | -            | -                | -                | -         |   -11.31 | alex666, El1an, lollipop21k, MaSvAl, nifee |
|           13 |     2181 | 2024-04-04 | SAW             | L   | 0.702      | -            | -                | -                | -         |    -0.73 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|           12 |     2217 | 2024-04-03 | System5         | W   | 0.696      | 0.500        | 0.000 (0.000)    | 0.115 (0.040)    | 0 (0.000) |     5.74 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|           11 |     2319 | 2024-03-28 | Monte           | W   | 0.656      | 0.500        | 0.189 (0.062)    | 0.674 (0.221)    | 0 (0.000) |    19.79 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|           10 |     2557 | 2024-03-15 | PERA            | W   | 0.569      | 0.500        | 0.058 (0.017)    | 0.455 (0.130)    | 0 (0.000) |    14.20 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|            9 |     2620 | 2024-03-13 | RUSH B          | L   | 0.556      | -            | -                | -                | -         |    -5.85 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|            8 |     2844 | 2024-03-05 | Insilio         | L   | 0.502      | -            | -                | -                | -         |    -3.35 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|            7 |     4076 | 2024-01-13 | ex-sYnck        | L   | 0.156      | -            | -                | -                | -         |    -3.75 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|            6 |     4084 | 2024-01-13 | esmagaB         | W   | 0.155      | 0.143        | 0.007 (0.000)    | 0.176 (0.004)    | 0 (0.000) |     2.67 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|            5 |     4123 | 2024-01-12 | PGE Turow       | W   | 0.150      | 0.143        | 0.002 (0.000)    | 0.040 (0.001)    | 0 (0.000) |     2.20 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|            4 |     4171 | 2024-01-11 | ex-Anonymo      | L   | 0.142      | -            | -                | -                | -         |    -2.96 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|            3 |     4174 | 2024-01-11 | Alliance        | W   | 0.141      | 0.143        | 0.018 (0.000)    | 0.432 (0.009)    | 0 (0.000) |     3.29 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|            2 |     4185 | 2024-01-10 | supresse        | W   | 0.137      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.62 | alex666, lollipop21k, MaSvAl, nifee, sad   |
|            1 |     4246 | 2024-01-09 | KOI             | L   | 0.129      | -            | -                | -                | -         |    -0.28 | alex666, lollipop21k, MaSvAl, nifee, sad   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($500.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
