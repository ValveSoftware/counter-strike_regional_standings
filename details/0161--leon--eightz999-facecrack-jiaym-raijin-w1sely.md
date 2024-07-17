### Roster Details<br />
Team Name: LEON<br />
Roster: eightz999, facecrack, JIaYm, Raijin, w1sely<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [161](../standings_global.md)<br />
Regional Rank: [105]( ../standings_europe.md)<br />
Final Rank Value:  696.7<br />
<br />
Final Rank Value (696.7) = Starting Rank Value (731.1) + Head To Head Adjustments (-34.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.334[<sup>1</sup>](#table2)
- Bounty Collected: 0.262[<sup>2</sup>](#table1)
- Opponent Network: 0.021[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.154<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 731.1
- 400 + ( ( 0.154 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 731.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |        7 | 2024-07-17 | Preasy            | L   | 1.000      | -            | -                | -                | -         |   -11.37 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           16 |      365 | 2024-06-15 | Preasy            | L   | 0.985      | -            | -                | -                | -         |   -10.96 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           15 |      397 | 2024-06-14 | RUBY              | L   | 0.980      | -            | -                | -                | -         |    -6.53 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           14 |      458 | 2024-06-12 | CYBERSHOKE        | L   | 0.967      | -            | -                | -                | -         |    -9.09 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           13 |      485 | 2024-06-11 | MASONIC           | W   | 0.958      | 0.143        | 0.014 (0.002)    | 0.109 (0.015)    | 0 (0.000) |    18.51 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           12 |      860 | 2024-06-03 | Verdant           | L   | 0.908      | -            | -                | -                | -         |    -8.97 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           11 |      922 | 2024-06-01 | Aurora Young Blud | L   | 0.893      | -            | -                | -                | -         |   -12.48 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|           10 |      944 | 2024-05-31 | VP.Prodigy        | W   | 0.888      | 0.372        | 0.039 (0.013)    | 0.498 (0.165)    | 0 (0.000) |    22.01 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            9 |      994 | 2024-05-29 | HOTU              | L   | 0.875      | -            | -                | -                | -         |   -14.38 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            8 |     1304 | 2024-05-18 | Rhyno             | L   | 0.798      | -            | -                | -                | -         |    -3.58 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            7 |     1327 | 2024-05-17 | WOPA              | W   | 0.793      | 0.143        | 0.001 (0.000)    | 0.152 (0.017)    | 0 (0.000) |     9.64 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            6 |     1461 | 2024-05-14 | VP.Prodigy        | L   | 0.774      | -            | -                | -                | -         |    -6.21 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            5 |     1487 | 2024-05-13 | Secret            | W   | 0.768      | 0.143        | 0.000 (0.000)    | 0.085 (0.009)    | 0 (0.000) |     7.41 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            4 |     1800 | 2024-04-29 | Nexus             | L   | 0.672      | -            | -                | -                | -         |    -6.34 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            3 |     1816 | 2024-04-28 | VP.Prodigy        | L   | 0.666      | -            | -                | -                | -         |    -5.60 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            2 |     2102 | 2024-04-18 | BIG               | L   | 0.598      | -            | -                | -                | -         |    -0.54 | eightz999, facecrack, JIaYm, Raijin, w1sely |
|            1 |     2578 | 2024-04-01 | Lazer Cats        | W   | 0.487      | 0.384        | 0.003 (0.001)    | 0.000 (0.000)    | 0 (0.000) |     4.05 | eightz999, facecrack, JIaYm, Raijin, w1sely |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,482.63)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
