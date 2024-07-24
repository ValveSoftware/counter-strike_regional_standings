### Roster Details<br />
Team Name: NOM<br />
Roster: dan1, hotd0g , m4tthi, meztal, MOREE<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [186](../standings_global.md)<br />
Regional Rank: [118]( ../standings_europe.md)<br />
Final Rank Value:  560.9<br />
<br />
Final Rank Value (560.9) = Starting Rank Value (523.9) + Head To Head Adjustments (36.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.231[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.061<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 523.9
- 400 + ( ( 0.061 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 523.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     1571 | 2024-05-18 | GUN5            | L   | 0.754      | -            | -                | -                | -         |    -2.38 | dan1, hotd0g , m4tthi, meztal, MOREE  |
|            9 |     1607 | 2024-05-17 | Rare Atom       | W   | 0.747      | 0.143        | 0.000 (0.000)    | 0.354 (0.038)    | 0 (0.000) |    15.15 | dan1, hotd0g , m4tthi, meztal, MOREE  |
|            8 |     1768 | 2024-05-14 | Heimo           | W   | 0.724      | 0.143        | 0.008 (0.001)    | 0.095 (0.010)    | 0 (0.000) |    16.33 | dan1, hotd0g , m4tthi, meztal, MOREE  |
|            7 |     1788 | 2024-05-13 | Rare Atom       | L   | 0.718      | -            | -                | -                | -         |    -7.30 | dan1, hotd0g , m4tthi, meztal, MOREE  |
|            6 |     2325 | 2024-04-19 | JANO            | L   | 0.560      | -            | -                | -                | -         |    -5.39 | dan1, hotd0g , m4tthi, meztal, MOREE  |
|            5 |     2378 | 2024-04-18 | RUBY            | L   | 0.552      | -            | -                | -                | -         |    -1.56 | dan1, hotd0g , m4tthi, meztal, MOREE  |
|            4 |     2414 | 2024-04-17 | Sampi           | W   | 0.546      | 0.143        | 0.037 (0.003)    | 0.994 (0.077)    | 0 (0.000) |    15.61 | dan1, hotd0g , m4tthi, meztal, MOREE  |
|            3 |     2770 | 2024-04-04 | KOI             | L   | 0.459      | -            | -                | -                | -         |    -0.57 | dan1, meztal, MOREE, shushan, tN1R    |
|            2 |     3272 | 2024-03-11 | MOUZ NXT        | L   | 0.298      | -            | -                | -                | -         |    -0.47 | dan1, Libido, meztal, MOREE, ultimate |
|            1 |     3313 | 2024-03-09 | Astralis Talent | W   | 0.285      | 0.303        | 0.012 (0.001)    | 0.180 (0.016)    | 0 (0.000) |     7.49 | dan1, Libido, meztal, MOREE, ultimate |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
