### Roster Details<br />
Team Name: FLuffy Gangsters<br />
Roster: Djon8, h1ghnesS, SoLb, takanashi, yuramyata<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [168](../standings_global.md)<br />
Regional Rank: [108]( ../standings_europe.md)<br />
Final Rank Value:  673.3<br />
<br />
Final Rank Value (673.3) = Starting Rank Value (579.8) + Head To Head Adjustments (93.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.298[<sup>2</sup>](#table1)
- Opponent Network: 0.037[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.084<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 579.8
- 400 + ( ( 0.084 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 579.8


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
|           10 |      149 | 2024-07-12 | Sashi             | L   | 1.000      | -            | -                | -                | -         |    -1.39 | Djon8, h1ghnesS, SoLb, takanashi, yuramyata |
|            9 |      232 | 2024-07-08 | TSM               | W   | 1.000      | 0.358        | 0.052 (0.019)    | 0.206 (0.074)    | 0 (0.000) |    26.32 | Djon8, h1ghnesS, SoLb, takanashi, yuramyata |
|            8 |      234 | 2024-07-08 | Insilio           | W   | 1.000      | 0.358        | 0.035 (0.013)    | 0.570 (0.204)    | 0 (0.000) |    28.56 | Djon8, h1ghnesS, SoLb, takanashi, yuramyata |
|            7 |      321 | 2024-06-16 | WOPA              | L   | 0.994      | -            | -                | -                | -         |   -14.58 | Djon8, h1ghnesS, SoLb, takanashi, yuramyata |
|            6 |      354 | 2024-06-15 | TÓR               | W   | 0.987      | 0.143        | 0.037 (0.005)    | 0.141 (0.020)    | 0 (0.000) |    26.98 | Djon8, h1ghnesS, SoLb, takanashi, yuramyata |
|            5 |      394 | 2024-06-14 | CPH Wolves        | L   | 0.980      | -            | -                | -                | -         |    -9.16 | Djon8, h1ghnesS, SoLb, takanashi, yuramyata |
|            4 |      441 | 2024-06-13 | TÓR               | W   | 0.972      | 0.143        | 0.037 (0.005)    | 0.141 (0.020)    | 0 (0.000) |    27.34 | Djon8, h1ghnesS, SoLb, takanashi, yuramyata |
|            3 |      865 | 2024-06-03 | Aurora Young Blud | L   | 0.907      | -            | -                | -                | -         |    -7.26 | Djon8, h1ghnesS, SoLb, takanashi, yuramyata |
|            2 |      906 | 2024-06-01 | Portugal          | W   | 0.895      | 0.372        | 0.006 (0.002)    | 0.162 (0.054)    | 0 (0.000) |    19.37 | Djon8, h1ghnesS, SoLb, takanashi, yuramyata |
|            1 |      997 | 2024-05-29 | Enterprise        | L   | 0.874      | -            | -                | -                | -         |    -2.63 | Djon8, h1ghnesS, SoLb, takanashi, yuramyata |

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
