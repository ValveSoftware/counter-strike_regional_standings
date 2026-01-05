### Roster Details<br />
Team Name: Underground<br />
Roster: 74LOR, Jynx, Mechanical, N1ghtraid, w0mbat<br />
Global Rank: [184](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_01_05.md)<br />
Regional Rank: [23]( ../../standings_asia_2026_01_05.md)<br />
<br />
Final Rank Value:  698.2<br />
<br />
Final Rank Value (698.2) = Starting Rank Value (786.1) + Head To Head Adjustments (-87.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.242[<sup>1</sup>](#table2)
- Bounty Collected: 0.218[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.303[<sup>2</sup>](#table1)

The average of these factors is 0.195<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 786.1
- 400 + ( ( 0.195 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 786.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |      361 | 2025-12-05 | LITE              | L   | 0.997      | -            | -                | -                | -         |   -18.55 | 74LOR, KRAXYT, Mechanical, RoyaL, w0mbat   |
|           12 |      365 | 2025-12-05 | THUNDER dOWNUNDER | L   | 0.996      | -            | -                | -                | -         |   -13.18 | 74LOR, KRAXYT, Mechanical, w0mbat, ws      |
|           11 |      490 | 2025-11-29 | Mindfreak         | L   | 0.957      | -            | -                | -                | -         |   -10.49 | 74LOR, Jynx, Mechanical, N1ghtraid, w0mbat |
|           10 |      493 | 2025-11-29 | Rooster           | L   | 0.956      | -            | -                | -                | -         |   -10.22 | 74LOR, Jynx, Mechanical, N1ghtraid, w0mbat |
|            9 |      496 | 2025-11-29 | Mindfreak         | W   | 0.955      | 0.279        | 0.009 (0.003)    | 0.459 (0.122)    | 1 (0.955) |    19.49 | 74LOR, Jynx, Mechanical, N1ghtraid, w0mbat |
|            8 |      535 | 2025-11-29 | BBBMBCBS          | W   | 0.952      | 0.279        | 0.000 (0.000)    | 0.062 (0.016)    | 1 (0.952) |     7.66 | 74LOR, Jynx, Mechanical, N1ghtraid, w0mbat |
|            7 |      539 | 2025-11-29 | blingus           | W   | 0.951      | 0.279        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.951) |     4.03 | 74LOR, Jynx, Mechanical, N1ghtraid, w0mbat |
|            6 |      541 | 2025-11-28 | Rooster           | L   | 0.950      | -            | -                | -                | -         |   -10.05 | 74LOR, Jynx, Mechanical, N1ghtraid, w0mbat |
|            5 |      609 | 2025-11-25 | Ground Zero       | L   | 0.925      | -            | -                | -                | -         |   -13.70 | 74LOR, Mechanical, Myst, N1ghtraid, w0mbat |
|            4 |      673 | 2025-11-23 | Vantage           | W   | 0.913      | 0.314        | 0.000 (0.000)    | 0.074 (0.021)    | 0 (0.000) |     9.19 | 74LOR, Mechanical, Myst, N1ghtraid, w0mbat |
|            3 |      710 | 2025-11-22 | LITE              | L   | 0.905      | -            | -                | -                | -         |   -18.33 | 74LOR, Mechanical, Myst, N1ghtraid, w0mbat |
|            2 |     1687 | 2025-10-24 | Animus Victoria   | L   | 0.712      | -            | -                | -                | -         |   -17.86 | 74LOR, Mechanical, Myst, N1ghtraid, RoyaL  |
|            1 |     1730 | 2025-10-23 | Vantage           | L   | 0.705      | -            | -                | -                | -         |   -15.93 | 74LOR, Mechanical, Myst, N1ghtraid, RoyaL  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($312.37)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-30 |      0.958 | $326.00        | $312.37         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
