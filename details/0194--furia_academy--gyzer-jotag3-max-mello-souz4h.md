### Roster Details<br />
Team Name: FURIA Academy<br />
Roster: GYZER, Jotag3, max, mello, souz4h<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [194](../standings_global.md)<br />
Regional Rank: [52]( ../standings_americas.md)<br />
Final Rank Value:  531.4<br />
<br />
Final Rank Value (531.4) = Starting Rank Value (535.3) + Head To Head Adjustments (-3.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.244[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.063<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 535.3
- 400 + ( ( 0.063 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 535.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |      102 | 2024-07-15 | Bounty Hunters | L   | 1.000      | -            | -                | -                | -         |    -2.11 | GYZER, Jotag3, max, mello, souz4h        |
|           10 |      127 | 2024-07-14 | KRÜ            | L   | 1.000      | -            | -                | -                | -         |    -3.65 | GYZER, Jotag3, max, mello, souz4h        |
|            9 |      203 | 2024-07-09 | MIBR Academy   | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     9.88 | GYZER, Jotag3, max, mello, souz4h        |
|            8 |      246 | 2024-07-05 | KRÜ            | L   | 1.000      | -            | -                | -                | -         |    -3.96 | GYZER, Jotag3, max, mello, souz4h        |
|            7 |      948 | 2024-05-31 | Dusty Roots    | L   | 0.887      | -            | -                | -                | -         |    -5.78 | Bruninho, cerolzin, GYZER, Jotag3, mello |
|            6 |     1002 | 2024-05-29 | Bounty Hunters | L   | 0.874      | -            | -                | -                | -         |    -3.07 | Bruninho, cerolzin, GYZER, Jotag3, mello |
|            5 |     1014 | 2024-05-28 | Intense        | L   | 0.869      | -            | -                | -                | -         |   -12.13 | Bruninho, cerolzin, GYZER, Jotag3, mello |
|            4 |     1316 | 2024-05-17 | ODDIK          | L   | 0.795      | -            | -                | -                | -         |    -2.00 | Bruninho, cerolzin, GYZER, Jotag3, mello |
|            3 |     1345 | 2024-05-16 | KRÜ            | W   | 0.788      | 0.303        | 0.034 (0.008)    | 0.324 (0.077)    | 0 (0.000) |    22.05 | Bruninho, cerolzin, GYZER, Jotag3, mello |
|            2 |     1457 | 2024-05-14 | Solid          | L   | 0.775      | -            | -                | -                | -         |    -2.57 | Bruninho, cerolzin, GYZER, Jotag3, mello |
|            1 |     1514 | 2024-05-12 | RED Canids     | L   | 0.761      | -            | -                | -                | -         |    -0.60 | Bruninho, cerolzin, GYZER, Jotag3, mello |

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
